//Read two values fron the user input (weight and height), then convert them from string to number. 

let weight = prompt('Please enter your weight in kilograms. If necessary, use a dot as a decimal separator.');
weight = Number(weight);

let height = prompt('Please enter your height in meters, using a dot as a decimal separator.');
height = Number(height);

let heightSquared = Math.pow(height, 2);

//Calculate the BMI using the formula: weight(kg)/height(m)^2 and display it in an alert() dialog box.

let BMI = weight / heightSquared;
alert(`Your BMI is: ${weight} / ${height}^2 = ${BMI}`);