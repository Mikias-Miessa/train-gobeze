const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// require('dotenv').config();
const userAuth = require('../../middleware/userAuth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  '/',
  check('name', 'name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('phone', 'phone is required').not().isEmpty(),
  check('role', 'role is required').not().isEmpty(),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 chars long'),
  async (req, res) => {
    console.log(req.body);
    const { name, email, phone, password, role } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //See if user exists
      let user = await User.findOne({ $or: [{ email }, { phone }] });
      if (user) {
        return res.status(400).json({
          errors: [{ msg: 'User already exists' }],
        });
      }

      user = new User({
        name,
        email,
        phone,
        password,
        role
      });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      //Save to MongoDB
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/users/update/:id
// @desc    Update user (Admin)
// @access  Private
router.put('/update/:id', userAuth, async (req, res) => {
  const { name, email, phone,role,oldPassword,  newPassword } = req.body;
console.log(req.body)
  try {
    //See if user exists
    let user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(400).json({
        errors: [{ msg: 'User does not exists' }],
      });
    }

    //Check for existing email
    if (email) {
      let existingEmail = await User.findOne({ email });

      if (existingEmail && user.email !== existingEmail.email) {
        return res.status(400).json({
          errors: [
            {
              msg: 'There is already an accounted created with this email address',
            },
          ],
        });
      }
      //update email
      user.email = email;
    }
    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (role) user.role = role;

    if (newPassword) {
      const isMatch = await bcrypt.compare(oldPassword,user.password);
      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: 'Current password is incorrect' }],
        });
      }
      //Encrypt new password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(newPassword, salt);
    }

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({
        msg: 'There is no user with this id',
      });
    }
    res.status(500).send('Server Error');
  }
});


// @route   DELETE api/users/:id
// @desc    Delete user (Admin)
// @access  Private
router.delete('/:id', userAuth, async (req, res) => {

    try {
      //See if deletedUser exists
      let deletedUser = await User.findOneAndDelete({ _id: req.params.id });
      if (!deletedUser) {
        return res.status(400).json({
          errors: [{ msg: 'User does not exists' }],
        });
      }
  
      res.json({msg: `${deletedUser.name} deleted from Users database`});
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({
          msg: 'There is no user with this id',
        });
      }
      res.status(500).send('Server Error');
    }
  });

// @route   GET api/users/
// @desc    Get all users
// @access  Private
router.get('/', userAuth, async (req, res) => {
    try {
      let users = await User.find({}).select('-password');    
      res.json(users)
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;
