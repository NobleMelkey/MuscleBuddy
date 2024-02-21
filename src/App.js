import logo from './pic/Lovepik_com-401147273-dumbbell.png';

import Login from './login';
import { Route, Routes } from 'react-router-dom';
import Page1 from './loginfrom/page1';
import Dashboard from './dashboard';
import Food from './food';
import Workout from './workout';
import MyWorkout from './myWorkout';
import Myfood from './myfood';
import Profile from './prof';


function App() {
  return (
    <div >
      
      <Routes>
        <Route path='/' element={<Login></Login>}/>
        <Route path='/page1' element={<Page1></Page1>}/>
        <Route path='/signup'/>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
        <Route path='/food' element={<Food></Food>}/>
        <Route path='/workout' element={<Workout></Workout>} />
        <Route path='/myworkout' element={<MyWorkout></MyWorkout>} />
        
        <Route path='/myfood' element={<Myfood></Myfood>}/>
        <Route path='/prof' element={<Profile></Profile>}/>
        
       </Routes>
    </div>
  );
}

export default App;
