const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const dotenv = require('dotenv').config();
const routes = require('./routes/routes') 


const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname,'./public')));

// Members API Routes
app.use('/',routes);

console.log(__dirname);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));