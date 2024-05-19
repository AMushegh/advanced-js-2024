function createPages(items, size) {
  let pages = [];
  let temp = [];
  for (let i = 0; i < items.length; i += size) {
    let sizeInner = i + size;
    for (let j = i; j < sizeInner; ++j) {
      if (items[j]) {
        temp.push(items[j]);
      }
    }
    pages.push([...temp]);
    temp = [];
  }

  return pages;
}

function Pagination(items = [], size = 10) {
  this.items = createPages(items, size);
  this.size = size;
  this.currentPage = 0;
}

Pagination.prototype.getVisibleItems = function () {
  console.log(this.items[this.currentPage]);
};
Pagination.prototype.prevPage = function () {
  if (this.currentPage === 0) {
    console.log("chem kara");
  } else {
    this.currentPage = this.currentPage - 1;
  }
};
Pagination.prototype.nextPage = function () {
  if (this.currentPage === this.items.length - 1) {
    console.log("chem kara");
  } else {
    this.currentPage = this.currentPage + 1;
  }
};
Pagination.prototype.goToPage = function (page) {
  if (page >= 0 && page <= this.items.length - 1) {
    this.currentPage = page - 1;
  } else {
    console.log("chem kara");
  }
};
Pagination.prototype.firstPage = function () {
  this.currentPage = 0;
};
Pagination.prototype.lastPage = function () {
  this.currentPage = this.items.length - 1;
};
Pagination.prototype.changeSize = function (size) {
  this.items = createPages(
    this.items.flatMap((el) => el),
    size
  );
  this.currentPage = 0;
  this.size = size;
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4);

console.log(p);

p.getVisibleItems();
p.nextPage();
p.getVisibleItems();
p.goToPage(8);
p.lastPage();
p.getVisibleItems();
p.changeSize(6);
p.changeSize(5);
