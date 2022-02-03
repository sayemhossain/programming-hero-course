function animalCount(miles) {
  const firstTenMiles = 10;
  const secondTenMiles = 50;
  const RestMiles = 100;

  if (miles <= 10) {
    const count = miles * firstTenMiles;
    return count;
  } else if (miles <= 20) {
    const firstDenseAnimal = 10 * firstTenMiles;
    const restMiles = miles - 10;
    const secondDenseAnimal = restMiles * secondTenMiles;
    const totalAnimals = firstDenseAnimal + secondDenseAnimal;
    return totalAnimals;
  } else {
    const firstDenseAnimal = 10 * firstTenMiles;
    const secondDenseAnimal = 10 * secondTenMiles;
    const restMiles = miles - 20;
    const restDenseAnimal = restMiles * RestMiles;
    const totalAnimals = firstDenseAnimal + secondDenseAnimal + restDenseAnimal;
    return totalAnimals;
  }
}
const animals = animalCount(35);
console.log(animals);
