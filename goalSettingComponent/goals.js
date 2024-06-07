//get reference to each input option
// MEAL / NUTRITION TRACKER LOGIC
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
logMealButton.addEventListener("click", () => {
  logMeal(); //log goes first because add meal clear input which is needed for log meal
  addMeal();
  calculateDailyIntake();
  updateGoalStatus();
});

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
  let calories = parseInt(caloriesInput.value);
  totalCalories += calories;
  document.getElementById("totalCalories").innerText = totalCalories;
  alert("Meal logged successfully!");
}

function calculateDailyIntake() {
  const goalCalories = parseInt(mealGoals.calories);
  const remainingCalories = goalCalories - totalCalories;
  remainingCaloriesText.innerText = remainingCalories;
}

//notes
/*
add meal name
min =0 on inputs
i need to check all inputs are filled
daily summary? total cal, can maybe do avg and for all stats
selecting specific htmls in css ( h1s)
*/

//GOAL TRACKER LOGIC
//beginning checkboxes
const mealGoalCheckbox = document.getElementById("mealGoal");
const fitnessGoalCheckbox = document.getElementById("fitnessGoal");

//goal setters components
const nutritionalGoalsContainer = document.getElementById(
  "nutritionalGoalsContainer"
);
const fitnessGoalsContainer = document.getElementById("fitnessGoalsContainer");

//add goal buttons
const addNutritionGoalButton = document.getElementById("addNutritionGoal");

//dropdown goals
const dropdownNutritionalGoals = document.getElementById("nutritionalGoals");
const dropdownNutritionalOperator = document.getElementById(
  "nutritionalOperator"
);
const mealNumValue = document.getElementById("mealNumValue");

//set goals button
const setGoalsButton = document.getElementById("setGoals");

//tracker components
const mealSection = document.getElementById("mealSection");
const fitnessSection = document.getElementById("fitnessSection");

const remainingCaloriesText = document.getElementById("remainingCalories");

//*need to hide set goals button if neither checkboxes are checked
//if meal goal checkbox is checked then show all meal related sections, else hide them
mealGoalCheckbox.addEventListener("click", (event) => {
  if (event.target.checked) {
    nutritionalGoalsContainer.style.display = "block";
    mealSection.style.display = "block";
  } else {
    nutritionalGoalsContainer.style.display = "none";
    mealSection.style.display = "none";
  }
});
//if fitness goal checkbox is check then show all fitness related sections, else hide them
fitnessGoalCheckbox.addEventListener("click", (event) => {
  if (event.target.checked) {
    fitnessGoalsContainer.style.display = "block";
    fitnessSection.style.display = "block";
  } else {
    fitnessGoalsContainer.style.display = "none";
    fitnessSection.style.display = "none";
  }
});

setGoalsButton.addEventListener("click", setGoal);

//store caloric goals input into mealGoals object
function setGoal() {
  /*
  let comparison =
    dropdownNutritionalOperator.value == "<=" ? "at most" : "at least";
    */
  remainingCaloriesText.textContent = mealNumValue.value;
  mealGoals.calories = mealNumValue.value;
  mealGoals.comparison = dropdownNutritionalOperator.value;
}
//object that store all our nutritional goals
let mealGoals = {
  calories: 2000,
  comparison: "",
};

// if <= and if remaining calories is negative then goal failed, else achieved
//if >= and if remaining calories is negative then I achieved, else failed
// makeshift end of day button-potentially
const goalStatusText = document.getElementById("goalStatus");
function updateGoalStatus() {
  let comparison = mealGoals.comparison;
  let remainingCalories = parseInt(remainingCaloriesText.textContent);
  if (comparison === "<=" && remainingCalories < 0) {
    goalStatusText.textContent = "Goal failed";
    goalStatusText.style.color = "red";
  }

  if (comparison === ">=" && remainingCalories < 0) {
    goalStatusText.textContent = "Goal Achieved";
    goalStatusText.style.color = "green";
  }
}
