const personalData = {
  name: "Mushegh",
  surname: "Andrasyan",
};

personalData.address.city = "vanadzor";
const personalData2 = Object.assign({}, personalData);

console.log(personalData2.address.city);

console.log(personalData.address === personalData2.address);
