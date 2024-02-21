const db =require('../../config/db');

exports.musclename =async (req, res) => {
    try {
      // Assuming you have a database connection and a query function
      const muscles = await db.query('SELECT muscle_name FROM muscles');
      res.json(muscles.rows); // Assuming muscles is an array of objects with muscle_name property
    } catch (error) {
      console.error('Error fetching muscles:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.workoutdetails =async (req, res) => {
    try {
      // Assuming you have a database connection and a query function
      const workout = await db.query('SELECT workout_name, quantity, description FROM workouts');
      res.json(workout.rows); // Assuming muscles is an array of objects with muscle_name property
    } catch (error) {
      console.error('Error fetching muscles:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.fetchworkout= async (req, res) => {
    try {
      const result = await db.query(`
        SELECT mw.id AS muscles_workouts_id,
               w.muscle_name,

               w.workout_name,
               w.quantity,
               w.description,
               mw.accumalated_quantity,
               mw.commant ,
               mw.date ,
               mw.is_active AS workout_is_active,
               mw.created_at AS workout_created_at,
               mw.updated_at AS workout_updated_at,
               mw.status AS workout_status
        FROM workouts w
        LEFT JOIN muscles_workouts mw ON workouts.id = mw.workout_id;
      `);
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
    }
  };
  // Assuming you have already set up your Express app and configured it to parse JSON bodies using bodyParser.json()

// Example endpoint to add a record to the workouts table
exports.postwork= async (req, res) => {
    try {
      const { userId, muscleId, workoutId, accumulatedQuantity, comment, isActive, day } = req.body;
      // Construct SQL INSERT query
      const query = `
        INSERT INTO muscles_workouts (user_id, muscle_id, workout_id, accumulated_quantity, comment, is_active, day)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `;
      // Execute the query
      const result = await pool.query(query, [userId, muscleId, workoutId, accumulatedQuantity, comment, isActive, day]);
      res.json({ success: true, data: result.rows[0] });
    } catch (error) {
      console.error('Error adding workout:', error);
      res.status(500).json({ success: false, error: 'An error occurred while adding workout' });
    }
  };
  
  exports.getworkout=  async (req, res) => {
    try {
      // Construct SQL query for left join
      const query = `
        SELECT 
               
               w.workout_name, 
               w.quantity, 
               w.description, 
               w.is_active AS workouts_is_active, 
               w.created_at AS workouts_created_at, 
               w.updated_at AS workouts_updated_at, 
               w.muscle_name,
               w.date
        FROM workouts w
        
      `;
  
      // Execute the query
      const result = await db.query(query);
  
      // Send the result as JSON
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching muscles_workouts:', error);
      res.status(500).json({ error: 'An error occurred while fetching muscles_workouts' });
    }
  };
  
  exports.postWorkouts= async (req, res) => {
    try {
      // Construct SQL query to join tables
      const query = `
        SELECT mw.id AS muscles_workouts_id, 
               mw.user_id, 
               mw.workout_id, 
               mw.accumalated_quantity, 
               mw.commant, 
               mw.is_active AS muscles_workouts_is_active, 
               mw.created_at AS muscles_workouts_created_at, 
               mw.updated_at AS muscles_workouts_updated_at, 
               mw.status AS muscles_workouts_status, 
               mw.date AS muscles_workouts_date,
               w.id AS workouts_id, 
               w.workout_name, 
               w.quantity, 
               w.description, 
               w.is_active AS workouts_is_active, 
               w.created_at AS workouts_created_at, 
               w.updated_at AS workouts_updated_at, 
               w.muscle_name
        FROM muscles_workouts mw
        LEFT JOIN workouts w ON mw.workout_id = w.id;
      `;
  
      // Execute the query
      const result = await db.query(query);
  
      // Send the result as JSON response
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    }
  };

  exports.post= async (req, res) => {
    try {
      const { muscle_name, date, quantity, workout_name, description } = req.body;
  
      // Construct SQL INSERT query
      const query = `
        INSERT INTO workouts (muscle_name, date, quantity, workout_name, description)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
  
      // Execute the query
      const result = await db.query(query, [muscle_name, date, quantity, workout_name, description]);
  
      // Send the response with the inserted data
      res.json({ success: true, data: result.rows[0] });
    } catch (error) {
      console.error('Error adding muscles_workouts:', error);
      res.status(500).json({ success: false, error: 'An error occurred while adding muscles_workouts' });
    }
  };
  
  


  

  