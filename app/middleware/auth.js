var admin = require("firebase-admin");
var db = require("../../config/db")
var serviceAccount = require("../../config/firebase.json");

if (!admin.apps.length) {
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });
}
else{
    console.log("Issue");
}

const authenticate = async (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization){
        res.status(401).send({message: "Unauthorized user"});
        return;
    }
    var token = authorization.split(" ");
    let decodedToken;
    try{
        decodedToken = await admin.auth().verifyIdToken(token[1]);
    }
    // console.log(decodedToken);
    catch(e){
        res.status(401).send({message: "Unauthorized user, please send valid bearer token"});
        return;
    }

    let user = await db.query("select * from users where auth_id = '"+decodedToken.uid+"'");
    if (user && user.rowCount !== 0){
        req.user = user.rows[0];
        console.log(req.user);
    }
    else{
        res.status(401).send({message: "Unauthorized user, please send valid bearer token"});
        return;
    }
    next();
}
module.exports = authenticate;
