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

addNutritionGoalButton.addEventListener("click", addNutritionGoal);

function addNutritionGoal() {
  let newGoal = document.createElement("div");
  newGoal.classList.add("goalCreator");
  //maybe create each div so that their info/value can be stored
  newGoal.innerHTML = `
    <div>
        <select class="dropdown" id="nutritionalGoals">
            <option value="fat">Fat</option>
            <option value="protein">Protein</option>
            <option value="calories">Calories</option>
            <option value="carbs">Carbs</option>
            <option value="sugar">Sugar</option>
            <option value="cost">Cost</option>
        </select>
    </div>
    <div>
        <select name="operator" id="nutritionalOperator" class="operatorSelector">
            <option value="<=">
                <= </option>
            <option value=">=">
                >= </option>
        </select>
    </div>
    <div>
        <input type="number" id="mealNumValue" name="numValue" step="0.01" min="0" value="0" required>
    </div>`;

  nutritionalGoalsContainer.appendChild(newGoal);
}

setGoalsButton.addEventListener("click", setGoal);

function setGoal() {
  console.log(dropdownNutritionalGoals.value);
  console.log(dropdownNutritionalOperator.value);
  console.log(mealNumValue.value);
  let comparison =
    dropdownNutritionalOperator.value == "<=" ? "at most" : "at least";
  alert(
    `Goal: I want my ${dropdownNutritionalGoals.value} intake to be ${comparison} ${mealNumValue.value}g`
  );
}

let mealGoals = {
  fat: 0,
  protein: 0,
  calories: 0,
  carbs: 0,
  sugar: 0,
  cost: 0,
};
