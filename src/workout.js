import React, { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import logo from './pic/Lovepik_com-401147273-dumbbell.png';
import '../src/workout.css';
import pushup from './pic/pushup_gif.gif';
import squade from './pic/BARBELL-SQUAT.gif';
import benchpress from './pic/barbell-bench-press.gif';
import inclindpress from './pic/inclind_dumbbell_press.gif';
import cablecoress from './pic/cable-cross-over.gif';
import pullover from './pic/barbell-pullover.gif';
import butterfly from "./pic/549f3b8dffadc4e2e7b5233b264d9c09.gif";
import Cablebackpulldown from './pic/Cable-Rear-Pulldown.gif';
import pullup from './pic/pull-up.gif';
import barbellbend from './pic/Barbell-Bent-Over-Row_Back-FIX_360.gif';
import Seated from './pic/Seated-Cable-Row.gif';
import Dumbbellrowing from './pic/Dumbbell-Bent-Over-Row.gif';
import deadleft from './pic/deadlift.webp';
import Barbellshrugs from './pic/barbell-shrug-muscles.gif';
import Cablesidelateralraise from './pic/cable_raters_rise.webp';
import Barbellfrontpress from './pic/seated-overhead-press.gif';
import Dumbbellreardelt from './pic/dumbbell-rear-delt-fly.gif';
import Cablecrossoverreardelt from './pic/cable-rear-delt-fly.gif';
import Cabletripushdown from './pic/cable-pushdown.gif';
import Barbellfrontraise from './pic/Barbell-Front-Raise.gif';
import Skullcrusher from './pic/scual_crush.gif';
import Doublearmdumbbellextension from './pic/double_arm_dumbbell-extensions.gif';
import Closegripbarbellpress from './pic/Close-grip-Bench-Press.gif';
import Barbellcurl from './pic/bar-curl.gif';
import Inclineddumbbellcurl from './pic/incline-dumbbell-curl.gif';

const Workout =()=>{
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 6;

  const handleClick = (route) => {
    navigate(`/${route}`);
  }
  const workouts = [
    {
      name: "Push-ups",
      imageSrc: pushup,
      description: "Description of push-ups workout...",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
      
    },
    {
      name: "Flat-Bench-Press",
      imageSrc: benchpress,
      description: "Description of squats workout...",
      newDescription: "This workout is based on 5 x 5 principle You should choose the challenging weight Maximum weight of your potential"
    },
    {
      name: "Incline Dumbbell Press",
      imageSrc: inclindpress,
      description: "Description of push-ups workout...",
      newDescription: "This workout is based on 5 x 5 principle You should choose the challenging weight Maximum weight of your potential"
    },
    {
      name: "Cable-crose",
      imageSrc: cablecoress,
      description: "Description of push-ups workout...",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Pull-over",
      imageSrc: pullover,
      description: "Description of push-ups workout...",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Peach-xtn",
      imageSrc: butterfly ,
      description: "Description of push-ups workout...",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Pull-up",
      imageSrc: pullup,
      description: "you'll work your Lats muscles",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Cable back pull down",
      imageSrc: Cablebackpulldown,
      description: "The primary target of back muscles.",
      newDescription: "This workout is based on 5 x 5 principle You should choose the challenging weight Maximum weight of your potential"
    },
    {
      name: "Barbell rowing",
      imageSrc: barbellbend,
      description: "you'll work your upper-back muscles",
      newDescription: "This workout is based on 5 x 5 principle You should choose the challenging weight Maximum weight of your potential"
    },
    {
      name: "Seated rowing",
      imageSrc: Seated,
      description: "the targets muscles in your upper back.",
      newDescription: "This workout is based on 5 x 5 principle You should choose the challenging weight Maximum weight of your potential"
    },
    {
      name: "Dumbbell rowing",
      imageSrc: Dumbbellrowing,
      description: "you'll work on your back muscles",
      newDescription: "This workout is based on 5 x 5 principle You should choose the challenging weight Maximum weight of your potential"
    },
    {
      name: "Dead lift",
      imageSrc: deadleft,
      description: "Works on your back muscles",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Barbell shrugs",
      imageSrc: Barbellshrugs,
      description: "shoulder shrugs target the trapezius muscles.",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Cable side lateral raise",
      imageSrc: Cablesidelateralraise,
      description: "primarily include the lateral deltoid muscles.",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Barbell front press",
      imageSrc: Barbellfrontpress,
      description: "the front and top of your shoulders.",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Dumbbell rear delt",
      imageSrc: Dumbbellreardelt,
      description: "Targets your shoulder muscles",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Cable cross over rear delt",
      imageSrc: Cablecrossoverreardelt,
      description: "Targeting the rear back muscles",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Barbell front raise",
      imageSrc: Barbellfrontraise,
      description: "Target the front deltoid",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Cable tri push down",
      imageSrc: Cabletripushdown,
      description: "It works on lateral heads of the triceps",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Skull crusher",
      imageSrc: Skullcrusher,
      description: "It works on lateral heads of the triceps",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Double arm dumbbell extension",
      imageSrc: Doublearmdumbbellextension,
      description: "It works on lateral heads of the triceps",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Close grip barbell press",
      imageSrc: Closegripbarbellpress,
      description: "It works on lateral heads of the triceps",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Barbell curl",
      imageSrc: Barbellcurl,
      description: "The barbell curl targets your biceps",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    {
      name: "Inclined dumbbell curl",
      imageSrc: Inclineddumbbellcurl,
      description: "Targets your biceps and a muscle in your forearm",
      newDescription: "You should do 4 sets 1st set- 15 reps , 2nd set - 12reps, 3rd set -10reps, 4th set - 8rep"
    },
    
    // Add more workout models as needed
  ];

  const indexOfLastWorkout = currentPage * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
  const currentWorkouts = workouts.slice(indexOfFirstWorkout, indexOfLastWorkout);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(workouts.length / workoutsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number}>
      <button
      onClick={() => setCurrentPage(number)}
      style={{
        padding: "10px 5px", // Adjust padding to add space around the buttons
        margin: "5 5px", // Adjust margin to add space between buttons
        backgroundColor: currentPage === number ? "red" : "white",
        color: currentPage === number ? "white" : "black",
        border: "1px solid black",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "12px", // Adjust font size to make buttons smaller
      }}
    >
      {number}
    </button>
    </li>
  ));
  const handleNextPage = () => {
    if (currentPage < Math.ceil(workouts.length / workoutsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const prevButton = (
    <button
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage === 1}
      style={{
        padding: "5px 8px",
        margin: "0 5px", // Adjust margin to add space between buttons
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "12px",
      }}
    >
      Previous
    </button>
  );
  
  const nextButton = (
    <button
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage === pageNumbers.length}
      style={{
        padding: "5px 8px",
        margin: "0 10px", // Adjust margin to add space between buttons
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "12px",
      }}
    >
      Next
    </button>
  );
  
  const flipCardBackRefs = useRef([]);

  // Function to toggle flip card back
  const toggleFlipCardBack = (index) => {
    const flipCardBack = flipCardBackRefs.current[index];
    if (flipCardBack) {
      flipCardBack.style.display = flipCardBack.style.display === "none" ? "block" : "none";
    }
  };

  // Function to toggle back to the front side
  const toggleBackToFront = (index) => {
    const flipCardBack = flipCardBackRefs.current[index];
    if (flipCardBack) {
      flipCardBack.style.display = "none";
    }
  };


    return(
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
            <li className="link"><a href="#class"onClick={() => handleClick('food')}>Foods</a></li>
            <li className="link"><a href="#trainer" onClick={() => handleClick('myworkout')}>My workouts</a></li>
            <li className="link"><a href="#price" onClick={() => handleClick('myfood')}>My Foods</a></li>
            <li><button className="btn" id="form-open" onClick={() => handleClick('prof')} >Profile</button></li>
          </ul>
        </nav>
        </header>
        <div className="workout-list" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "50px", padding: "100px" }}>
        {currentWorkouts.map((workout, index) => (
          <div key={index} className="workout-model" style={{
            border: "1px solid #ccc",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            padding: "20px",
            position: "relative", // Added position relative for flip card
          }}>
            <img
              src={workout.imageSrc}
              alt={workout.name}
              style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
            />
            <div
              ref={(el) => flipCardBackRefs.current[index] = el} // Store reference to flip card back element
              className="workout-flip-card-back"
              style={{ display: "none", position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "#fff", padding: "20px", textAlign: "center" }}
            >
              <p>{workout.newDescription}</p>
              <button style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }} onClick={() => toggleBackToFront(index)}>Back to Front</button>
            </div>
            <h3>{workout.name}</h3>
            <p>{workout.description}</p>
            <button onClick={() => toggleFlipCardBack(index)}>Show</button>
          </div>
        ))}
      </div>
      <ul id="page-numbers" style={{ position: "absolute", top: "150px", right: "50px", listStyle: "none", padding: 0, display: "flex", flexDirection: "row" }}>
      
        {prevButton}
      {renderPageNumbers}
      {nextButton}
      </ul>
    </div>
  );
}

export default Workout;