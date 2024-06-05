const mealsComponent = document.getElementById("meals");
const mealsButton = document.getElementById("meals-button");

const meals = [];

function createMeal(timeEaten, fat, protein, calories, carbs, sugar, cost) {
  return {
    timeEaten,
    fat,
    protein,
    calories,
    carbs,
    sugar,
    cost,
  };
}

function addMeal(mealData) {
  let meal = createMeal(
    mealData.timeEaten,
    mealData.fat,
    mealData.calories,
    mealData.carbs,
    mealData.sugar,
    mealData.cost
  );

  let mealJSONString = JSON.stringify(meal);

  meals.push(meal);
  mealsComponent.innerHTML += `<div class="meal">${mealJSONString}</div>`;
}

mealsButton.addEventListener("click", () => {
  const mealData = {
    timeEaten: "13:00",
    fat: "5g",
    calories: "300",
    carbs: "20",
    sugar: "10g",
    cost: "$100",
  };
  addMeal(mealData);
});
