const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userAuth = require('../../middleware/userAuth');

const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST   api/auth/
// @desc    Login User
// @access  Public

router.post(
  '/',
  check('email', 'Please include a valid email').isEmail(),
  check('password').exists().withMessage('Password is required'),
  async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //See if user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials' }],
        });
      }
      //Check Password

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials' }],
        });
      }

      //Return jsonwebtoken :to login the users right away when they register
      const payload = {
        user: {
          id: user.id,
        },
      };
// console.log('secrret' + process.env.jwtSecret)
      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/auth/user
// @desc    Return Logen in User data
// @access  Private
router.get('/user', userAuth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select('-password');
   
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
