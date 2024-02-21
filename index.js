const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = 6001;
const moment = require('moment');

var admin = require("firebase-admin");
var serviceAccount = require("../Sample/firebase.json");

if (!admin.apps.length) {

    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });
}
else{
    console.log("Issue");
}

const {dbConnect, Pool} = require('pg')
const db = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    password: "test1234",
    port:5432,
    database:"Training"
});




app.post('/users', async(req, res) => {
    var check = await db.query("select id, name,email, phone from users where phone='"+req.query.phone+"'");

    if (check && check.rowCount === 0){
        try {
            const userRecord = await admin.auth().createUser({
                phoneNumber: "+91"+req.query.phone,
                email: req.query.email,
              });

            console.log(userRecord);
            if (userRecord.uid && userRecord.uid.length != 0){
                var query = "insert into users (name, email, phone, uid) values ('"+req.query.name+"', '"+req.query.email+"', '"+req.query.phone+"', '"+userRecord.uid+"')";
                console.log(query);
                var result = await db.query(query);
                res.json({status: "Success", result: result});
            }
            else{
                res.json({status: "fail", result: ""+userRecord});
            }
              
        } catch (error) {
            res.json({status: "fail", result: error});
        }
    }
    else{
        res.json({status: "Fail", message:"Record already exist"});
    }
});

app.put('/users/:user_id', async(req, res) => {
    var check = await db.query("select id, name,email, phone from users where id='"+req.params.user_id+"'");
    if (check && check.rowCount !== 0){
        var result = await db.query("update users set phone ='"+req.query.phone+"' where id = "+req.params.user_id);
        res.json({status: "Success", result: result});
    }
    else{
        res.json({status: "Fail", message:"Record does not exist"});
    }
})

app.delete('/users/:user_id', async(req, res) => {
    var check = await db.query("select id, name,email, phone from users where id='"+req.params.user_id+"'");
    if (check && check.rowCount !== 0){
        var result = await db.query("update users set is_active = false where id = "+req.params.user_id);
        res.json({status: "Success", result: result});
    }
    else{
        res.json({status: "Fail", message:"Record does not exist"});
    }
})

app.get('/users/:user_id', async(req, res) => {
    var result = await db.query("select id, name,email, phone from users where is_active = true and id = "+req.params.user_id);
    res.json({status: "Success", result: result.rows});
})

app.get('/users', async(req, res) => {
    var result = await db.query("select id, name,email, phone, created_at from users where is_active = true");
    var updatedRes = [] 

    result.rows.forEach(user => {
        user["created_at"] = moment(user.created_at).format('DD-MM-YY');
        user["created_at_time"] = moment(user.created_at).format('hh:mm');
        updatedRes.push(user);
    });
    res.json({status: "Success", result: updatedRes});

})

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.post('/hello/:test', (req, res) => {
    var n = 21/0;
    console.log(req);
    res.status(200).json({"message": "Hello Buddy", query: req.query, path: req.params});
});

// app.use(bodyParser.json);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});