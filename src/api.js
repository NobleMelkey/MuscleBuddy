import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:6002', // Replace with your backend server URL
});

export const fetchDietFoods = async () => {
  try {
    const response = await api.get('/api/diet_foods');
    return response.data;
  } catch (error) {
    console.error('Error fetching diet foods:', error);
    throw error;
  }
};

export const fetchFoodDetails = async () => {
  try {
    const response = await axios.get('http://localhost:6002/fooddetails');
    return response.data;
  } catch (error) {
    console.error('Error fetching food details:', error);
    throw error;
  }
};

// Add other API functions as needed
