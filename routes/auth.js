const express = require('express');
const router = express.Router();

// import validators
const {
    userRegisterValidator,
    userLoginValidator,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../validators/auth');
const { runValidation } = require('../validators');

// import from controllers
const {
    register,
    registerActivate,
    login,
    forgotPassword, 
    resetPassword
} = require('../controllers/auth');

// register route
router.post('/register', userRegisterValidator, runValidation, register);
// on activate by clicking link
router.post('/register/activate', registerActivate);
//login
router.post('/login', userLoginValidator, runValidation, login);
//password forgot and resets
router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);

// router.get('/secret', requireSignin, (req, res) => {
//     res.json({
//         data: 'This is secret page for logged in users only'
//     });
// });

module.exports = router;
