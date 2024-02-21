import React, { useState } from "react";

const CalorieCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [goal, setGoal] = useState("weightLoss");
  const [calories, setCalories] = useState(0);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const calculateCalories = () => {
    let baseCalories = 0;

    if (goal === "weightLoss") {
      baseCalories = 1000; // Calorie deficit for weight loss
    } else {
      baseCalories = 0; // No calorie deficit for maintenance
    }

    // Adjust base calories based on activity level
    if (activityLevel === "sedentary") {
      baseCalories *= 1.2;
    } else if (activityLevel === "moderate") {
      baseCalories *= 1.55;
    } else if (activityLevel === "active") {
      baseCalories *= 1.725;
    }

    // Calculate total calories
    return baseCalories;
  };

  const handleCalculate = () => {
    const calculatedCalories = calculateCalories();
    setCalories(calculatedCalories);
  };

  return (
    <div>
      <h1>Calorie Calculator</h1>
      <p>Weight (kg):</p>
      <input type="number" value={weight} onChange={handleWeightChange} />
      <p>Activity Level:</p>
      <select value={activityLevel} onChange={handleActivityLevelChange}>
        <option value="sedentary">Sedentary</option>
        <option value="moderate">Moderate</option>
        <option value="active">Active</option>
      </select>
      <p>Goal:</p>
      <select value={goal} onChange={handleGoalChange}>
        <option value="weightLoss">Weight Loss</option>
        <option value="maintenance">Maintenance</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      <p>Calories: {calories}</p>
    </div>
  );
};

export default CalorieCalculator;
