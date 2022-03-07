// alert
const alertTest = () => {
  alert("Hi this is me Sayem");
};

// confirm
const askPicnic = () => {
  const response = confirm("Are you going to picnic?");
  console.log(response);
  if (response == true) {
    alert("Taka bKash kore deu..");
  } else {
    alert("DMG! dure giya mor ");
  }
};

// prompt
const askName = () => {
  const name = prompt("what's your name");
  if (name) {
    console.log(name);
  }
};
