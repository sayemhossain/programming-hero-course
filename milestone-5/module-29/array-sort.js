const numbers = [5, 2, 7, 3, 9, 1, 4, 8];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ["badhon", "shanto", "nayan", "ullash", "uthso", "tusar"];
const sortedFriends = friends.sort();
// console.log(sortedFriends);

//reverse
const reverseFriends = friends.reverse();
// console.log(reverseFriends);

//number sorting fun
const bigNumber = [66, 56, 43, 89, 23, 1, 5, 90, 3, 6];
const sortedBigNumbers = bigNumber.sort(function (a, b) {
  return a - b;
});
console.log(sortedBigNumbers);
