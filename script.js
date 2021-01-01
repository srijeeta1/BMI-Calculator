let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
const btn = document.querySelector(".result-btn");
let result = document.querySelector(".BMI");

console.log(btn, result);
btn.addEventListener('click', getBMI);

function getBMI() {
    const heightValue = height.value;
    const weightValue = weight.value;
    if (heightValue > 0 && weightValue > 0) {
        const BMIvalue = weightValue / (heightValue * heightValue);
        result.innerHTML = BMIvalue.toFixed(2);
    }
}
