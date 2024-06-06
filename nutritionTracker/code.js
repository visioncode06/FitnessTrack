const mealTimeInput = document.getElementById("mealTime");
const fatInput = document.getElementById("fat");
const proteinInput = document.getElementById("protein");
const caloriesInput = document.getElementById("calories");
const carbsInput = document.getElementById("carbs");
const sugarInput = document.getElementById("sugar");
const costInput = document.getElementById("cost");

const resultSection = document.querySelector(".result-section");
const logMealButton = document.getElementById("mealButton");

const meals = [];
logMealButton.addEventListener("click", addMeal);

function addMeal() {
  console.log("I was pressed");
  let mealItem = document.createElement("div");
  mealItem.classList.add("mealItem");
  mealItem.innerHTML = `
        <ol>
        <p> Insert Meal Name</p>
        <div>Due Date: <input type="datetime-local" readonly value="${mealTimeInput.value}" id="dueDateInfo"></div>
            <li>Fat: ${fatInput.value}g</li>
            <li>protein: ${proteinInput.value}g</li>
            <li>calories: ${caloriesInput.value}g</li>
            <li>carbs: ${carbsInput.value}g</li>
            <li>sugar: ${sugarInput.value}g</li>
            <li>cost: $${costInput.value}</li>
          </ol>`;
  meals.push(mealItem);
  //add to end of daily summary
  resultSection.appendChild(mealItem);

  //clear input values
  fatInput.value = "";
  proteinInput.value = "";
  caloriesInput.value = "";
  mealTimeInput.value = "";
  carbsInput.value = "";
  sugarInput.value = "";
  costInput.value = "";
}
let totalCalories = 0;
function logMeal() {
  const calories = parseInt(document.getElementById("calories").value);
  totalCalories += calories;
  document.getElementById("totalCalories").innerText = totalCalories;
  alert("Meal logged successfully!");
}
function calculateDailyIntake() {
  const goalCalories = parseInt(document.getElementById("goalCalories").value);
  const remainingCalories = goalCalories - totalCalories;
  document.getElementById("remainingCalories").innerText = remainingCalories;
  alert("Daily caloric intake calculated!");
}
