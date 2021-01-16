const targetInput = document.querySelector("input");
const targetButton = document.querySelector("button");
const targetList = document.querySelector("ul");

targetButton.addEventListener("click", addGoal);

function addGoal() {
    var targetValue = targetInput.value;
    var listElement = document.createElement("li");
    listElement.textContent = targetValue;
    targetList.appendChild(listElement);
}
