import {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import logo from './pic/Lovepik_com-401147273-dumbbell.png';
import '../src/workout.css';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyWorkout = () => {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [exercises, setExercises] = useState([]);
    const [scheduleData, setScheduleData] = useState([]);
    const [workoutSchedules, setWorkoutSchedules] = useState([]);
    const [muscleNames, setMuscleNames] = useState([]);
  const [newExercise, setNewExercise] = useState({ day: '', muscle: '', description: '', time: '' });
  const [inputValue, setInputValue] = useState('');
  const [suggestedTags, setSuggestedTags] = useState([]);
  const [suggestedWorkout, setsuggestedWorkout] = useState([]);
  const [workoutData, setWorkoutData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6002/getworkout');
        setWorkoutData(response.data); // Assuming response.data is an array of workout data
      } catch (error) {
        console.error('Error fetching workout data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchWorkoutData = async () => {
      try {
        const response = await axios.get('http://localhost:6002/fetchworkout');
        setWorkoutData(response.data); // Assuming the response contains an array of workout data
      } catch (error) {
        console.error('Error fetching workout data:', error);
      }
    };

    fetchWorkoutData();
  }, []); 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setInputValue(e.target.value);
    setNewExercise((prevExercise) => ({
      ...prevExercise,
      [name]: value,
    }));
  };

    const handleClick = (route) => {
      navigate(`/${route}`);
    };
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewExercise((prevExercise) => ({
          ...prevExercise,
          [name]: value,
        }));
      };
  
    
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setNewExercise((prevExercise) => ({
        ...prevExercise,
        [name]: checked,
      }));
    };
    const handleAddExercise = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:6002/post', {
          muscle_name: newExercise.muscle,
          date: selectedDate,
          quantity: newExercise.quantity,
          workout_name: newExercise.Workout,
          description: newExercise.description
        });
  
        // Assuming the response contains the newly added exercise data
        const newExerciseData = response.data;
  
        // Update the exercises state with the new exercise data
        setExercises((prevExercises) => [...prevExercises, newExerciseData]);
  
        // Reset the newExercise state
        setNewExercise({ day: '', muscle: '', description: '', time: '' });
  
        // Close the popup
        setIsPopupOpen(false);
      } catch (error) {
        console.error('Error adding exercise:', error);
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
        <button className="btn" onClick={openPopup}>Add Exercise</button>
      {isPopupOpen && (
        <div className="popup">
        <h2>Add Exercise</h2>
        <form onSubmit={handleAddExercise}>
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
        <label htmlFor="muscle">Muscle:</label>
        <input
          type="text"
          id="muscle"
          name="muscle"
          value={newExercise.muscle}
          onChange={handleInputChange}
          list="suggestedTags"
        />
        <datalist id="suggestedTags">
          {suggestedTags.map((muscles, index) => (
            <option key={index} value={muscles.muscle_name} />
          ))}
        </datalist>
      </div>
          <div className="form-group">
            <label htmlFor="muscle">Workout:</label>
            <input
              type="text"
              id="Workout"
              name="Workout"
              value={newExercise.Workout}
              onChange={handleInputChange}
              list="suggested"
            />
            <datalist id="suggested">
          {suggestedWorkout.map((workouts, index) => (
            <option key={index} value={workouts.workout_name} />
          ))}
        </datalist>
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={newExercise.description}
              onChange={handleInputChange}
              list="suggesteddes"
            />
            <datalist id="suggesteddes">
          {suggestedWorkout.map((workouts, index) => (
            <option key={index} value={workouts.description} />
          ))}
        </datalist>
          </div>
          
          <div className="form-group">
            <label htmlFor="Comments">Quantity:</label>
            <input
              type="text"
              id="Comments"
              name="Comments"
              value={newExercise.Comments}
              onChange={handleInputChange}
              list="suggestedquan"
              />
              <datalist id="suggestedquan">
            {suggestedWorkout.map((workouts, index) => (
              <option key={index} value={workouts.quantity} />
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
            
            <th>Muscle</th>
            <th>Workout</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>accumulated quantity</th>
            <th>Comments</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workoutData.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.date}</td>
              <td>{schedule.muscle_name}</td>
              <td>{schedule.workout_name}</td>
              <td>{schedule.description}</td>
              <td>{schedule.quantity}</td>
              <td>{schedule.accumalated_quantity}<input
                  type="text"
                  name="commant"
                  value={schedule.commant}
                  onChange={(e) => handleInputChange(e, index)}
                /></td>
              <td>{schedule.commant}<input
                  type="text"
                  name="commant"
                  value={schedule.commant}
                  onChange={(e) => handleInputChange(e, index)}
                /></td>
              
              <td> <input
                  type="checkbox"
                  name="status"
                  checked={schedule.status}
                  onChange={(e) => handleCheckboxChange(e, index)}
                /></td>
              <td>
                <button style={{ backgroundColor: "green" }}>Edit</button>
  <button style={{ backgroundColor: "red" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyWorkout;