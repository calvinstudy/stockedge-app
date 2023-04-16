const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session  = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const AdminRoutes = require('./routes/admin');
const AdminModel = require('./model/admin');

const AuthRouter = require('./routes/auth');

const app = express();

const MONGODB_URI = 'mongodb://localhost:27017/indomaju';
const store = new MongoDBStore({
	uri : MONGODB_URI,
	collection : 'userSession'
});


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded( { extended : false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
	session({
		secret : 'my secret', 
		resave : false, 
		saveUninitialized : false, 
		store : store
	})
);

app.use( (req, res, next) => {
    AdminModel.findById(req.session.admin._id)
    .then( admin => {
        req.admin = admin;
        next();
    })
})

app.use('/', AdminRoutes)
app.use('/auth', AuthRouter)

mongoose.connect(MONGODB_URI)
.then( () => {
    AdminModel.find()
    .then( admin => {
        if(admin.length < 1) {
            const admin = new AdminModel({
                username: 'admin',
                password: ' '
            });
            
            admin.save();
        }
    })
    
    app.listen(3000, () => {
        console.log(`Serverr running in http://localhost:${3000}`);
    });
})
.catch( err => { console.log(err) });