// var alia = 95,
//   dalia = 66,
//   salia = 80,
//   malia = 59,
//   lilia = 47,
//   jalaia = 77;
var studnts = ["alia", "dalia", "salia", "malia", "lalia", "jalaia"];
for (var i = 0; i < studnts.length; i++) {
  var marks = prompt("enter number");

  if (marks < 50) {
    console.log("Grade F");
  } else if (marks >= 50 && marks < 60) {
    console.log("Grade D");
  } else if (marks >= 60 && marks < 70) {
    console.log("Grade C");
  } else if (marks >= 70 && marks < 80) {
    console.log("Grade B");
  } else if (marks >= 80 && marks < 90) {
    console.log("Grade A");
  } else if (marks >= 90) {
    console.log("Grade A+");
  } else {
    console.log("Something wrong!");
  }
}
