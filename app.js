const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const routes = require('./routes/routes')
//const usersRoutes = require('./routes/users')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const dbConfig = require('./models/db.js');
const app = express();

//passport controller
require('./controllers/passport')(passport);

// const options = {
// 	host : 'localhost',
// 	port :'3306',
// 	user : 'root',
// 	password : '',
// 	database : 'test',
// };

const sessionStore = new MySQLStore(dbConfig);

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');




app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
// Set static folder
app.use(express.static(path.join(__dirname,'./public')));

//passport session
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

//passport
app.use(passport.initialize());
app.use(passport.session());

//connect-flash
app.use(flash());


//Global Variables
app.use((req,res,next) => {
 
 res.locals.errors = req.flash('error');
 res.locals.isAuthenticated = req.isAuthenticated();
	next();
});


// Members API Routes
app.use('/',routes);
//app.use('/user',usersRoutes);

//console.log(__dirname);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));