const mealGoalCheckbox = document.getElementById("mealGoal");
const fitnessGoalCheckbox = document.getElementById("fitnessGoal");

const nutritionalGoals = document.getElementById("nutritionalGoalsContainer");
const fitnessGoals = document.getElementById("fitnessGoalsContainer");

const mealSection = document.getElementById("mealSection");
const fitnessSection = document.getElementById("fitnessSection");

//if meal goal checkbox is checked, show all meal related sections
mealGoalCheckbox.addEventListener("click", (event) => {
  if (event.target.checked) {
    nutritionalGoals.style.display = "block";
    mealSection.style.display = "block";
  } else {
    nutritionalGoals.style.display = "none";
    mealSection.style.display = "none";
  }
});
//if fitness goal checkbox is check, show all fitness related sections
fitnessGoalCheckbox.addEventListener("click", (event) => {
  if (event.target.checked) {
    fitnessGoals.style.display = "block";
    fitnessSection.style.display = "block";
  } else {
    fitnessGoals.style.display = "none";
    fitnessSection.style.display = "none";
  }
});
