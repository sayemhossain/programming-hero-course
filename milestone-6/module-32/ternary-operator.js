let age = 2;
var type =
  age >= 18
    ? "adult"
    : age < 10 && age > 2
    ? "child"
    : age <= 2
    ? "baby"
    : "young";
console.log(type);
