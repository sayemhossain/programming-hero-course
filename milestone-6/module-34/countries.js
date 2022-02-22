const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  //   console.log(countries);
  const countriesDiv = document.getElementById("countries");
  for (const country of countries) {
    console.log(country.name);
    countriesDiv.innerText = country.name.common;
  }
};
loadCountries();
