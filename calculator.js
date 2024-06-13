window.onload = () => {
    let button = document.querySelector('#btn');

    button.addEventListener('click', calculateBMI);
}

function calculateBMI(){
    // Get the height and weight values
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    let result = document.querySelector('#result');

    // Check for valid height input
    if (height === '' || isNaN(parseInt(height))) {
        result.innerHTML = 'Please provide a valid height!';
        return;
    }

    // Check for valid weight input
    if (weight === '' || isNaN(parseInt(weight))) {
        result.innerHTML = 'Please provide a valid weight!';
        return;
    }

    // Convert height and weight to integers
    height = parseInt(height);
    weight = parseInt(weight);

    // Calculate BMI
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Determine BMI category
    if (bmi < 18.6) {
        result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
        result.innerHTML = `Normal : <span>${bmi}</span>`;
    } else {
        result.innerHTML = `Over Weight : <span>${bmi}</span>`;
    }
}
