/*
🧠 Problem Title: BMI Calculator with Arabic Classification

❓ Problem Statement:  
Write a function that calculates the Body Mass Index (BMI) given a person's weight (in kilograms) and height (in meters). The function should return a string showing the BMI value rounded to two decimal places, along with its classification in Arabic.

📥 Input:  
- A number `weight` in kilograms.  
- A number `height` in meters.

📤 Output:  
- A string in the format `"BMI = value (classification)"`, where `value` is the BMI rounded to two decimal places, and `classification` is one of the following:
  - "نحافة" for BMI < 18.5  
  - "وزن طبيعي" for BMI between 18.5 and 24.9  
  - "زيادة وزن" for BMI between 25 and 29.9  
  - "سمنة من الدرجة 1" for BMI between 30 and 34.9  
  - "سمنة من الدرجة 2" for BMI between 35 and 39.9  
  - "سمنة مفرطة (درجة 3)" for BMI ≥ 40

📌 Example:  
- Input: `weight = 70`, `height = 1.75`  
  Output: `"BMI = 22.86 (وزن طبيعي)"`
*/
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "نحافة";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "وزن طبيعي";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "زيادة وزن";
    } else if (bmi >= 30 && bmi <= 34.9) {
        category = "سمنة من الدرجة 1";
    } else if (bmi >= 35 && bmi <= 39.9) {
        category = "سمنة من الدرجة 2";
    } else {
        category = "سمنة مفرطة (درجة 3)";
    }

    return BMI = $ { bmi.toFixed(2) }($ { category });
}

// مثال:
console.log(calculateBMI(70, 1.75)); // BMI = 22.86 (وزن طبيعي)