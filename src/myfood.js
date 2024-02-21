import {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import logo from './pic/Lovepik_com-401147273-dumbbell.png';
import '../src/workout.css';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Myfood = () => {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [muscleNames, setMuscleNames] = useState([]);
  const [newExercise, setNewExercise] = useState({ day: '', muscle: '', description: '', time: '' });
  const [suggestedTags, setSuggestedTags] = useState([]);
  const [suggestedWorkout, setsuggestedWorkout] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);
  const [foodNames, setFoodNames] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newFoodEntry, setNewFoodEntry] = useState({
    day: '',
    mealType: '',
    foodName: '',
    quantity: '',
    description: '',
  });
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setSuggestedTags(muscleNames);
  }, [muscleNames]);

  const api = axios.create({
    baseURL: 'http://localhost:6002', // Replace with your backend server URL
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/diet_foods'); // Replace with your actual API endpoint
        const data = response.data;
         console.log("dropdown datas:",data)
        // Extract meal types, food names, quantities, and descriptions from the data
        const uniqueMealTypes = [...new Set(data.map((item) => item.meal_type))];
        const uniqueFoodNames = [...new Set(data.map((item) => item.food_name))];
        const uniqueQuantities = [...new Set(data.map((item) => item.max_cal_per_meal))];
        const uniqueDescriptions = [...new Set(data.map((item) => item.description))];
        

        // Update the state with the unique values
        setMealTypes(uniqueMealTypes);
        setFoodNames(uniqueFoodNames);
        setQuantities(uniqueQuantities);
        setDescriptions(uniqueDescriptions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await axios.get('http://localhost:6002/fooddetails');
        console.log('API Response:', response.data); // Log the API response
        setFoodData(response.data.data); // Update state with the data array
      } catch (error) {
        console.error('Error fetching food details:', error);
      }
    };
  
    fetchFoodDetails();
  }, []);

  const [workoutDetails, setWorkoutDetails] = useState([]);
  useEffect(() => {
    setsuggestedWorkout(workoutDetails);
  }, [workoutDetails]);
 

  console.log("Muscle Names:", muscleNames); // Log the muscleNames state

    const handleClick = (route) => {
      navigate(`/${route}`);
    };
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      console.log('Closing popup'); 
      setIsPopupOpen(false);
    };
  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFoodEntry((prevFoodEntry) => ({
          ...prevFoodEntry,
          [name]: value,
        }));
      };

      const handleAddFood = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:6002/postdiet', {
            meal_type: newFoodEntry.mealType,
            food_name: newFoodEntry.foodName,
            max_cal_per_meal: newFoodEntry.quantity,
            description: newFoodEntry.description,
            date: selectedDate, // Use selectedDate for the date value
          });
          console.log('New food entry added:', response.data);
          setFoodData((prevFoodData) => [...prevFoodData, response.data]);
          console.log('Food data updated:', foodData); // Add this line
          closePopup();
          // Optionally, you can update the UI or state to reflect the new food entry
        } catch (error) {
          console.error('Error adding food entry:', error);
        }
      };
      
    return (
      <div>
        <header className="header">
        
        <nav>
          <div className="nav__header">
            <div className="nav__logo">
              <a href="#"><img src={logo} alt="logo" />MuscleBuddy</a>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <span><i className="ri-menu-line" /></span>
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li className="link"><a href="#home" onClick={() => handleClick('dashboard')}>Home</a></li>
            <li className="link"><a href="#about" onClick={() => handleClick('Workout')}>Workouts</a></li>
            <li className="link"><a href="#class" onClick={() => handleClick('food')}>Foods</a></li>
            <li className="link"><a href="#trainer" onClick={() => handleClick('myworkout')}>My workouts</a></li>
            <li className="link"><a href="#price" onClick={() => handleClick('myfood')}>My Foods</a></li>
            <li><button className="btn" id="form-open">Profile</button></li>
          </ul>
        </nav>
      

        </header>
        <button className="btn" onClick={openPopup}>Add Food</button>
      {isPopupOpen && (
        <div className="popup">
         <h2>Add Food</h2>
      <form onSubmit={handleAddFood}>
        <div className="form-group">
          <label htmlFor="day">Date:</label>
          <DatePicker
            id="day"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
          />
            <datalist id="suggestedate">
          {suggestedWorkout.map((workouts, index) => (
            <option key={index} value={workouts.date} />
          ))}
        </datalist>
          </div>
         
          <div className="form-group">
  <label htmlFor="mealType">Meal Type:</label>
  <input
    type="text"
    id="mealType"
    name="mealType"
    value={newFoodEntry.mealType}
    onChange={handleInputChange}
    list="mealTypeList"
  />
  <datalist id="mealTypeList">
    {mealTypes.map((type, index) => (
      <option key={index} value={type} />
    ))}
  </datalist>
</div>
<div className="form-group">
        <label htmlFor="foodName">Food Name:</label>
        <input
          type="text"
          id="foodName"
          name="foodName"
          value={newFoodEntry.foodName}
          onChange={handleInputChange}
          list="foodNameList"
          
        />
        <datalist id="foodNameList">
          {foodNames.map((name, index) => (
            <option key={index} value={name} />
          ))}
        </datalist>
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity (kcal):</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={newFoodEntry.quantity}
          onChange={handleInputChange}
          list="quantityList"
        />
        <datalist id="quantityList">
          {quantities.map((quantity, index) => (
            <option key={index} value={quantity} />
          ))}
        </datalist>
      </div>
      <div className="form-group">
  <label htmlFor="description">Description:</label>
  <input
    type="text"
    id="description"
    name="description"
    value={newFoodEntry.description}
    onChange={handleInputChange}
    list="descriptionList"
  />
  <datalist id="descriptionList">
    {descriptions.map((desc, index) => (
      <option key={index} value={desc} />
    ))}
  </datalist>
</div> 
            <button type="submit">Add</button>
            <button type="button" onClick={closePopup}>Cancel</button>
          </form>
        </div>
      )}
    <table className="table">
        <thead>
        <tr>
            <th>Date</th>
            <th>Meal Type</th>
            <th>Name</th>
            <th>Quantity-kcal</th>
            <th>Description</th>
            <th>Accumulated kcal</th>
            <th>Comments</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {foodData.length > 0 ? (
  foodData.map((food) => (
    <tr key={food.diet_food_id}>
      <td>{food.date}</td>
      <td>{food.meal_type}</td>
      <td>{food.food_name}</td>
      <td>{food.max_cal_per_meal}</td>
      <td>{food.food_description}</td>
      <td>user should give</td>
      <td>user should give</td>
      <td>{food.meal_status}</td>
      <td>
      <button style={{ backgroundColor: "green" }}>Edit</button>
  <button style={{ backgroundColor: "red" }}>Delete</button>
      </td>
      
      {/* Add other table cells here */}
    </tr>
  ))
) : (
  <tr>
    <td colSpan="8">No data available</td>
  </tr>
)}

        </tbody>
      </table>
    </div>
  );
};

export default Myfood;