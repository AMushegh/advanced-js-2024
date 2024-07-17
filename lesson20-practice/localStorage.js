const buttonElement = document.querySelector("button");

localStorage.setItem(
  "dahjkljhdwa",
  JSON.stringify({ data: 1289, expDate: "14/07/2024-18:20" })
);

class Storage {
  static set(key, value, expDate) {
    localStorage.setItem(key, JSON.stringify({ data: value, expDate }));
  }

  static get(key) {
    const storedValue = JSON.parse(localStorage.getItem(key));

    if (storedValue.expDate) {
      // if expDate is ok return data
      // else return null and remove item from storage
    }

    return storedValue.data;
  }
}

Storage.set("RobertRequest", 890283, 32637826387);
