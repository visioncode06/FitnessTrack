//get reference to each input option
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
//on log meal click => addmeal()
logMealButton.addEventListener("click", addMeal);

function addMeal() {
  //console.log("I was pressed");
  //create html element to add to result section
  let mealItem = document.createElement("div");
  mealItem.classList.add("mealItem");
  mealItem.innerHTML = `
        <ul>
        <p> Insert Meal Name</p>
        <div>Ate at: <input type="datetime-local" readonly value="${mealTimeInput.value}" id="dueDateInfo"></div>
            <li>Fat: ${fatInput.value}g</li>
            <li>protein: ${proteinInput.value}g</li>
            <li>calories: ${caloriesInput.value}g</li>
            <li>carbs: ${carbsInput.value}g</li>
            <li>sugar: ${sugarInput.value}g</li>
            <li>cost: $${costInput.value}</li>
          </ul>`;
  meals.push(mealItem);
  //add to end of result section (daily summary)
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

//code from thomas' html just moved over here
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
