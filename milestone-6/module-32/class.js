class Support {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  name;
  designation = "Support web development";
  address = "BD";
  startSession() {
    console.log(this.name, "start a support session");
  }
}
const badhon = new Support("badhon shaha", "rangpur");
// console.log(badhon);
badhon.startSession();
// const shanto = new Support("Shanto", "chadpur");
// console.log(shanto);
