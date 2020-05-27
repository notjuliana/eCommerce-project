const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require("path");
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const cors = require('cors');
const app = express();

const routes = require('./routes/index');
const users = require('./routes/users');

require('./config/passport')(passport);

 app.use(cors());
 app.use(bodyParser.json());
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }))

 const MONGO_DB = 'mongodb+srv://dbUser:PoPysnRDEXiqi22W@ecommerceproject-noabg.gcp.mongodb.net/test?retryWrites=true&w=majority'

// Connect to Mongo
  mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Database connected successfully`))
    .catch(error => console.log(error));

// EJS
    //app.use(expressLayouts);
    app.set('view engine', 'ejs');
   

// Express session
  app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  
// Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  
// Connect flash
  app.use(flash());

// Global variables
    app.use(function(req, res, next) {
      res.locals.success_msg = req.flash('success_msg');
      res.locals.error_msg = req.flash('error_msg');
      res.locals.error = req.flash('error');
      next();
    });

// Routes
  app.use('/', routes); 
  app.use('/users', users);
  

 const port = process.env.PORT || 5000;
 app.listen(port, () => console.log(`Server started on port ${port}`));