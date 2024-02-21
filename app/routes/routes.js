module.exports = app =>{
    const auth = require("../middleware/auth");
    const userController = require("../controller/usersController");
    const workoutcontroller=require("../controller/workoutscontroller");
    const foodcontroller = require("../controller/foodcontroller");
    console.log("test");

    
    app.get("/muscle-name",workoutcontroller.musclename);
    app.get("/workoutdetails", workoutcontroller.workoutdetails );
    app.get("/fetchworkout",workoutcontroller.fetchworkout);
    app.post("/add",workoutcontroller.postwork);
    app.get("/fooddetails", foodcontroller.fetchFood);
    app.get('/api/diet_foods',foodcontroller.display_dropdown);
    app.post('/api/add_diet_type_and_user_meal',foodcontroller.post_dats);
    app.post('/postdiet',foodcontroller.postdietfood);
    app.post("/workoupos",foodcontroller.postworkous);
    app.get("/getworkout", workoutcontroller.getworkout);
    app.post("/postWorkouts", workoutcontroller.postWorkouts);
    app.post("/post",workoutcontroller.post);

    
};