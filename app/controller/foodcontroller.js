const db =require('../../config/db');


exports.fetchFood =  async (req, res) => {
  try {
    // Query to retrieve data from diet_foods and user_meals tables
    const query = `
      SELECT
        df.id AS diet_food_id,
        df.meal_type,
        df.food_name,
        df.date,
        df.max_cal_per_meal,
        df.description AS food_description,
        um.id AS user_meal_id,
        um.user_id,
        um.commant AS comment,
        um.is_active AS meal_is_active,
        um.created_at AS meal_created_at,
        um.updated_at AS meal_updated_at,
        um.status AS meal_status
      FROM
        diet_foods df
     LEFT JOIN
        user_meals um ON df.id = um.diet_food_id;
    `;

    // Execute the query
    const { rows } = await db.query(query);

    // Send the retrieved data as a JSON response
    res.json({ success: true, data: rows });
  } catch (error) {
    // Handle any errors that occur during the query or response
    console.error('Error executing query:', error);
    res.status(500).json({ success: false, error: 'An error occurred while fetching data.' });
  }
};

  exports.display_dropdown = async (req, res) => {
    try {
      // Example query to fetch data from the diet_foods table (Replace with your actual query)
      const query = 'SELECT meal_type, food_name, max_cal_per_meal, description FROM diet_foods';
      const result = await db.query(query); // Assume db.query is a function that executes SQL queries
  
      res.json(result.rows); // Assuming result.rows contains the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  };
  

  exports.post_dats = async (req, res) => {
    const { userId, dietFoodId, description, commant, isActive, createdAt, updatedAt } = req.body;
  
    try {
      const client = await db.connect();
  
      try {
        await client.query('BEGIN'); // Start the transaction
  
        // Check if the user_id exists in the users table
        const userExistsResult = await client.query('SELECT id FROM users WHERE id = $1', [userId]);
        if (userExistsResult.rows.length === 0) {
          throw new Error('User with the provided user_id does not exist');
        }
  
        // Check if the diet_food_id exists in the diet_foods table
        const dietFoodExistsResult = await client.query('SELECT id FROM diet_foods WHERE id = $1', [dietFoodId]);
        if (dietFoodExistsResult.rows.length === 0) {
          throw new Error('Diet food with the provided diet_food_id does not exist');
        }
  
        // Insert into user_meals table
        const userMealResult = await client.query('INSERT INTO user_meals (user_id, diet_food_id, description, commant, is_active, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [userId, dietFoodId, description, commant, isActive, createdAt, updatedAt]);
        const newUserMeal = userMealResult.rows[0];
  
        await client.query('COMMIT'); // Commit the transaction
  
        client.release();
        res.status(201).json(newUserMeal);
      } catch (err) {
        await client.query('ROLLBACK'); // Rollback the transaction if any error occurs
        throw err;
      }
    } catch (err) {
      console.error('Error adding user meal', err);
      res.status(500).json({ error: 'An error occurred while adding user meal' });
    }
  };
  
  exports.postdietfood =async (req, res) => {
    const { meal_type, food_name, max_cal_per_meal, description, date} = req.body;
  
    try {
      // Insert the data into the diet_foods table
      const result = await db.query('INSERT INTO diet_foods (meal_type, food_name, max_cal_per_meal, description, date, is_active, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [meal_type, food_name, max_cal_per_meal, description,date , true, new Date(), new Date()]);
  
      // Send the newly inserted row as the API response
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error adding data to diet_foods table:', error);
      res.status(500).json({ error: 'An error occurred while adding data to diet_foods table' });
    }
  }
  exports.postworkous =async (req, res) => {
    const { workout_name, quantity, description, is_active, created_at, updated_at, muscle_name } = req.body;
  
    try {
      const newWorkout = await db.query(
        'INSERT INTO workouts (workout_name, quantity, description, is_active, created_at, updated_at, muscle_name) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [workout_name, quantity, description, is_active, created_at, updated_at, muscle_name]
      );
  
      res.json(newWorkout.rows[0]);
    } catch (err) {
      console.error('Error adding workout:', err);
      res.status(500).json({ error: 'An error occurred while adding the workout.' });
    }
  };
  
  
  