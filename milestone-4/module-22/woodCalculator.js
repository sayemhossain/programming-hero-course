function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  // wood calculation
  const chairWoodQuantity = chairQuantity * perChairWood;
  const tableWoodQuantity = tableQuantity * perTableWood;
  const bedWoodQuantity = bedQuantity * perBedWood;
  //add all wood
  const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
  return totalWood;
}

const first = woodCalculator(0, 0, 1);
console.log(first);
