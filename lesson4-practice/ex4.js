function ProfileInfo() {
  this.setUsername = function (username) {
    this.username = username;
  };

  this.getUsername = function () {
    return this.username;
  };

  this.setEmail = function (email) {
    this.email = email;
  };

  this.getEmail = function () {
    return this.email;
  };

  this.setAddress = function (address) {
    this.address = address;
  };

  this.getAddress = function () {
    return this.address;
  };
}

function User() {
  this.setName = function (name) {
    this.name = name;
  };

  this.setAge = function (age) {
    this.age = age;
  };

  this.setProfileInfo = function (profileInfo) {
    this.profileInfo = profileInfo;
  };

  this.getProfileInfo = function () {
    return this.profileInfo;
  };

  this.getAge = function () {
    return this.age;
  };

  this.getName = function () {
    return this.name;
  };
}

const profileInfo = new ProfileInfo();
profileInfo.setUsername("username");
profileInfo.getUsername();
profileInfo.setEmail("abc@example.com");
profileInfo.getEmail();
profileInfo.setAddress("The user address");
profileInfo.getAddress();

/**
 * {
 *      username: "username",
 *      email: "abc@example.com"
 *      address: "The user address"
 * }
 */

const user = new User();
user.setName("John");
user.getName();
user.setAge(63);
user.getAge();
user.setProfileInfo(profileInfo);
user.getProfileInfo();

console.log(user.getProfileInfo().getAddress());

user.profileInfo.setAddress("new Address");

console.log(user.profileInfo.getAddress());
/**
 * {
 *      name: "John",
 *      age: 63:
 *      profileInfo: {
 *          username: "username",
 *          email: "abc@example.com"
 *          address: "The user address"
 *      }
 * }
 */
