//get reference to each input option
// MEAL / NUTRITION TRACKER LOGIC
const mealNameInput = document.getElementById("mealName");
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
  updateMealStats();
  updateMealStatsText();
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
          <p class="mealItemName">${mealNameInput.value}</p>
          <div>Ate at: <input type="datetime-local" readonly value="${mealTimeInput.value}" id="dueDateInfo">
          </div>
          <li>Fat: ${fatInput.value}g</li>
          <li>Protein: ${proteinInput.value}g</li>
          <li>Calories: ${caloriesInput.value}g</li>
          <li>Carbs: ${carbsInput.value}g</li>
          <li>Sugar: ${sugarInput.value}g</li>
          <li>Cost: $${costInput.value}</li>
        </ul>`;
  meals.push(mealItem);
  //add to end of result section (daily summary)
  resultSection.appendChild(mealItem);

  //clear input values
  mealNameInput.value = "";
  fatInput.value = 0;
  proteinInput.value = 0;
  caloriesInput.value = 0;
  mealTimeInput.value = "";
  carbsInput.value = 0;
  sugarInput.value = 0;
  costInput.value = 0;
}

//code from thomas' html just moved over here
let totalCalories = 0;
function logMeal() {
  let calories = parseInt(caloriesInput.value);
  totalCalories += calories;
  document.getElementById("totalCalories").innerText = totalCalories;
  //alert("Meal logged successfully!");
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
  comparison: "<=",
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

/* view more code */
let isViewMoreOn = false; // content hidden by default
const viewMoreButton = document.getElementById("viewMore");
const viewMoreContent = document.getElementById("viewMoreContent");
const viewMoreText = document.getElementById("viewMoreText");

//onclick toggle view more content
viewMoreButton.addEventListener("click", () => {
  viewMore();
});

//get stat texts
let statsText = [
  document.getElementById("mealCount"),
  document.getElementById("fatStats"),
  document.getElementById("proteinStats"),
  document.getElementById("carbsStats"),
  document.getElementById("sugarStats"),
  document.getElementById("costStats"),
];
//set stat texts to meal stats
function updateMealStatsText() {
  statsText[0].textContent = mealStats.mealCount;
  statsText[1].textContent = mealStats.Fat;
  statsText[2].textContent = mealStats.Protein;
  statsText[3].textContent = mealStats.Carbs;
  statsText[4].textContent = mealStats.Sugar;
  statsText[5].textContent = mealStats.Cost;
}
//update meal stats object based on user input
function updateMealStats() {
  mealStats.mealCount++;
  mealStats.Fat += parseInt(fatInput.value);
  mealStats.Protein += parseInt(proteinInput.value);
  mealStats.Carbs += parseInt(carbsInput.value);
  mealStats.Sugar += parseInt(sugarInput.value);
  mealStats.Cost += parseInt(costInput.value);
}
//keep track of meal stats
const mealStats = {
  //num of meals
  mealCount: 0,
  //all total
  Fat: 0,
  Protein: 0,
  Carbs: 0,
  Sugar: 0,
  Cost: 0,
};

//toggle view more content
function viewMore() {
  //flip or toggle value
  isViewMoreOn = !isViewMoreOn;
  if (isViewMoreOn) {
    // if on show content
    viewMoreText.textContent = "less -";
    viewMoreContent.style.display = "block";
  } else {
    //else hide content
    viewMoreText.textContent = "more +";
    viewMoreContent.style.display = "none";
  }
}
