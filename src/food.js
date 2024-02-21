import React, {useState} from "react";
import logo from './pic/Lovepik_com-401147273-dumbbell.png';
import highProteinImage from './pic/High-In-Protein-207766945.jpg'; // Import your high protein image
import lowCarbImage from './pic/low-carb.jpg'; // Import your low carb image


import { useNavigate } from "react-router-dom";


const Food = () => {
  const navigate = useNavigate();
  const [showHighProtein, setShowHighProtein] = useState(false);
  const [showLowCarb, setShowLowCarb] = useState(false);


  const handleClick = (route) => {
    navigate(`/${route}`);
  }

  return (
    <div>
      <header className="header" >
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
            <li className="link"><a href="#class" onClick={() => handleClick('Food')}>Foods</a></li>
            <li className="link"><a href="#trainer" onClick={() => handleClick('myworkout')}> My workouts</a></li>
            <li className="link"><a href="#price" onClick={() => handleClick('myfood')}>My Foods</a></li>
            <li><button className="btn" id="form-open">Profile</button></li>
          </ul>
        </nav>
      </header>
      
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div className="category-container">
          <img src={highProteinImage} alt="High Protein Foods" className="category-image" />
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setShowHighProtein(!showHighProtein)}>High Protein Foods<span>&#9660;</span></button>
            <div className="dropdown-content" style={{ display: showHighProtein ? "block" : "none" }}>
              <p>Chicken (25g protein per 100g)</p>
              <p>Beef (26g protein per 100g)</p>
              <p>Fish (22g protein per 100g)</p>
              {/* Add more high protein food items as needed */}
            </div>
          </div>
        </div>
        <div className="category-container">
          <img src={lowCarbImage} alt="Low Carb Foods" className="category-image" />
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setShowLowCarb(!showLowCarb)}>Low Carb Foods<span>&#9660;</span></button>
            <div className="dropdown-content" style={{ display: showLowCarb ? "block" : "none" }}>
              <p>Broccoli (4g carbs per 100g)</p>
              <p>Spinach (3g carbs per 100g)</p>
              <p>Avocado (9g carbs per 100g)</p>
              {/* Add more low carb food items as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Food;
