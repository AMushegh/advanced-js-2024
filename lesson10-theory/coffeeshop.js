const coffeeShopMenu = [
  {
    name: "Espresso",
    type: "drink",
    price: 2.99,
  },
  {
    name: "Latte",
    type: "drink",
    price: 3.99,
  },
  {
    name: "Cappuccino",
    type: "drink",
    price: 3.99,
  },
  {
    name: "Americano",
    type: "drink",
    price: 2.49,
  },
  {
    name: "Mocha",
    type: "drink",
    price: 4.29,
  },
  {
    name: "Hot Chocolate",
    type: "drink",
    price: 3.49,
  },
  {
    name: "Iced Coffee",
    type: "drink",
    price: 3.29,
  },
  {
    name: "Croissant",
    type: "food",
    price: 2.99,
  },
  {
    name: "Bagel with Cream Cheese",
    type: "food",
    price: 3.49,
  },
  {
    name: "Blueberry Muffin",
    type: "food",
    price: 2.49,
  },
  {
    name: "Scone",
    type: "food",
    price: 2.99,
  },
  {
    name: "Banana Bread",
    type: "food",
    price: 2.99,
  },
  {
    name: "Breakfast Sandwich",
    type: "food",
    price: 5.49,
  },
  {
    name: "Grilled Cheese Sandwich",
    type: "food",
    price: 4.99,
  },
];

class CoffeeShop {
  #orders = [];
  #totalAmount = 0;
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
  }

  addOrder(name) {
    const item = this.menu.find((el) => el.name === name);
    if (item) {
      this.#orders.push(item);
      this.#totalAmount += item.price;
    } else {
      console.log("this item is currently unavailable!");
    }
  }

  fulfillOrder() {
    if (this.#orders.length) {
      const { name } = this.#orders.shift();
      console.log(`The ${name} is ready!`);
    } else {
      console.log("All orders have been fulfilled!");
    }
  }

  listOrders() {
    console.log(this.#orders.map((el) => el.name));
  }

  dueAmount() {
    console.log(this.#totalAmount);
  }

  cheapestItem() {
    let cheapestItem = this.menu[0];

    this.menu.forEach((menuItem) => {
      if (menuItem.price < cheapestItem.price) {
        cheapestItem = menuItem;
      }
    });

    console.log(cheapestItem.name);
  }

  drinkOnly() {
    console.log(
      this.menu.filter((el) => el.type === "drink").map((el) => el.name)
    );
  }

  foodOnly() {
    console.log(
      this.menu.filter((el) => el.type === "food").map((el) => el.name)
    );
  }
}

const cofix = new CoffeeShop("cofix", coffeeShopMenu);
console.log(cofix);

cofix.addOrder("Latte");
cofix.addOrder("kebab");
cofix.addOrder("Scone");
cofix.fulfillOrder();
cofix.dueAmount();
cofix.addOrder("Banana Bread");
cofix.fulfillOrder();
cofix.cheapestItem();
cofix.drinkOnly();
cofix.foodOnly();
