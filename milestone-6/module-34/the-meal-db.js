const searchFood = () => {
  const searchFeild = document.getElementById("search-feild");
  const searchText = searchFeild.value;
  // console.log(searchText);
  searchFeild.value = "";

  // fetching data from api
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.meals));
};

const displaySearchResult = (meals) => {
  // console.log(meals);
  const searchResult = document.getElementById("search-result");
  meals.forEach((meal) => {
    // console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div onclick="loadMealDetail(${
      meal.idMeal
    })" class="card" style="height:40rem; width:22rem">
            <img src="${
              meal.strMealThumb
            }" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
    </div>
    `;
    searchResult.appendChild(div);
  });
};

const loadMealDetail = (mealId) => {
  console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
};

const displayMealDetail = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById("mealDetails");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  mealDetails.appendChild(div);
};
