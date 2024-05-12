function copy(obj) {
  const res = {};

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      res[key] = copy(obj[key]);
    } else {
      res[key] = obj[key];
    }
  }

  return res;
}

const a = {
  name: "ashot",
  address: {
    city: "yerevan",
    street: "abovyan",
    building: {
      entrance: "a",
    },
  },
};

let b = copy(a);

b.address.street = "proshyan";

console.log(a, b);
console.log(a === b);
