function metricBMR() 
{
    var bmr;
    var Gender;
    var Calories = 0;
    var Gender = document.getElementById("Gender").value;
    var Age = document.getElementById("Age").value;
    var Height = document.getElementById("Height").value;
    var Weight = document.getElementById("Weight").value;

    var exercises1 = document.getElementById("exercises1");
    var exercises2 = document.getElementById("exercises2");
    var exercises3 = document.getElementById("exercises3");
    var exercises4 = document.getElementById("exercises4");
    var exercises5 = document.getElementById("exercises5");
    (exercises1.checked) ? (Calories += 1.2) : (Calories += 0);
    (exercises2.checked) ? (Calories += 1.375) : (Calories += 0);
    (exercises3.checked) ? (Calories += 1.55) : (Calories += 0);
    (exercises4.checked) ? (Calories += 1.725) : (Calories += 0);
    (exercises5.checked) ? (Calories += 1.9) : (Calories += 0);
    (Gender == "Male") ? bmr = 66.5 + (13.76 * Weight ) + (5.003 * Height ) - (6.755 * Age ) : bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age);
    (Gender == "Female") ? bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age ) : bmr = 66.5 + (13.76 * Weight ) + (5.003 * Height ) - (6.755 * Age);
    totalCalories = bmr + Calories;
    document.write("<p>Your Gender is " + Gender + ".</p>");
    document.write("<p>Your BMR is " + bmr + ".</p>");
    document.write("<p>Your Total Calories is " + totalCalories + ".</p>");
}
document.getElementById("submit").addEventListener("click", metricBMR, false);
