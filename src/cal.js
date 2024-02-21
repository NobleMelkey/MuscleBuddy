import React, { useState } from "react";

const FatPercentageCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("male");
  const [fatPercentage, setFatPercentage] = useState(0);
  const [fatLevel, setFatLevel] = useState(""); // State for fat level

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const calculateFatPercentage = () => {
    let baseFatPercentage = 0;

    if (gender === "male") {
      baseFatPercentage = 15; // Average fat percentage for males
    } else {
      baseFatPercentage = 20; // Average fat percentage for females
    }

    // Calculate fat percentage based on weight and gender
    const calculatedFatPercentage = weight * (baseFatPercentage / 100);

    // Determine fat level
    let level = "";
    if (calculatedFatPercentage > 25) {
      level = "Overfat";
    } else if (calculatedFatPercentage > 20) {
      level = "Extreme";
    } else {
      level = "Normal";
    }

    return { percentage: calculatedFatPercentage, level: level };
  };

  const handleCalculate = () => {
    const { percentage, level } = calculateFatPercentage();
    setFatPercentage(percentage);
    setFatLevel(level); // Update the fat level state
  };

  return (
    <div>
      <h1>Fat Percentage Calculator</h1>
      <p>Weight (kg):</p>
      <input type="number" value={weight} onChange={handleWeightChange} />
      <p>Gender:</p>
      <select value={gender} onChange={handleGenderChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      <p>Fat Percentage: {fatPercentage}%</p>
      <p>Fat Level: {fatLevel}</p>
    </div>
  );
};

export default FatPercentageCalculator;
