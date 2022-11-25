var cowsay = require("cowsay");

// json - javascript aboject notation
// json - key value pair

const person_details = {
  name: "ayush",
  surname: "chuhan",
  eduction: [],
};

console.log(person_details.name);

console.log(
  cowsay.say({
    text: "Aushush is coding",
    e: "❤️❤️",
    T: " p",
    r: true,
  })
);
