const anthem = "Amar sonar Bangla ami tomai valobashi";

//splice
const words = anthem.split(" ");
const withOutA = anthem.split("a");
// console.log(withOutA);

//slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

//substr
const anoterPart = anthem.substr(11, 8);
// console.log(anoterPart);

//subString
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

//concat
const first = "amader ";
const second = "city";
// const fullString = first + second;
// console.log(first.concat(second).concat(" Dhaka"));

//join
const word = ["a", "b", "c", "d"];
const allJoined = word.join(", ");
console.log(allJoined);
