const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = (countries) => {
  //   console.log(countries);
  const countriesDiv = document.getElementById("countries");
  for (const country of countries) {
    // console.log(country);
    // const p = document.createElement("p");
    // p.innerText = country.name.common;
    // countriesDiv.appendChild(p);
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.capital}</p>
    <button onclick="loadCountryByName('${country.name.common}'
    )">Details</button>
    `;
    countriesDiv.appendChild(div);
  }
};
const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data[0]));
  // console.log(url);
};
