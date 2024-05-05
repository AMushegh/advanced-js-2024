function printUserInfo({ name, username }) {
  return `name is ${name}, username is ${username}`;
}

const user = {
  name: "awd",
  email: "adjwkl@mail.com",
  username: "jdawklhdlk",
  age: 34,
};

const user2 = {
  name: "dwdawkl;",
  email: "adjwkadawdl@mail.com",
  username: "jdadawdwwklhdlk",
  age: 31,
};

console.log(printUserInfo(user));
console.log(printUserInfo(user2));
