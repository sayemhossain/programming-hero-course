class StudentCare {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  name;
  designation = "student care web development";
  address = "BD";
  buildARoutine(student) {
    console.log(this.name, "Build a routine for", student);
  }
}
const alia = new StudentCare("Alia", "India");
console.log(alia);
