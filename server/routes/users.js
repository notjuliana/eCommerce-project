const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/User');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
app.get('/login',(req,res)=>{
  res.render('login.js')
})
//handling login logic
app.post("/login", passport.authenticate("local",
{
  successRedirect: "/",
  failureRedirect: "/login",
}), function(req, res){
});

// Register Page
app.get("/register", function(req, res){
  res.render("register.js"); 
});
app.post("/register", function(req, res){
   var newUser = new User({
               username: req.body.username
       });
   User.register(newUser, req.body.password, function(err, user){
       if(err){
           console.log("error", err.message);
           return res.redirect("/register");
       }
       passport.authenticate("local")(req, res, function(){
                       console.log("success", "you have successfully registered as  " + user.username);
          res.redirect("/"); 
       });
   });
});
// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
app.get("/logout", (req, res)=>{
  req.logout();
      console.log("success", "You have successfully logged out ");
  res.redirect("/login");
});


module.exports = router;
