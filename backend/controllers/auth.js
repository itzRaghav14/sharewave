const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
  try {
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    // creating a user
    const user = await User.create(req.body);
    res.status(200).json({ message: 'Succuessfully created an account', data: user });
  }
  catch (err) {
    // returning error
    console.log('Error in creating a user:', err);
    res.status(500).json({ message: 'some error occured' });
  }
};

module.exports.login = async (req, res) => {
  try {
    // search for user
    const user = await User.findOne({ email: req.body.email });

    // if user not found then return error 404
    if (!user) {
      res.status(404).json({ message: 'user not found' });
      return;
    }

    // otherwise compare the password using bcrypt
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    // if the password is not valid then return username or password not valid
    if (!isPasswordValid) {
      res.status(403).json({ message: 'email or password is incorrect' });
      return;
    }

    // otherwise login
    res.status(200).json({ message: 'Successfully logged in!', data: user });
  }
  catch (err) {
    // if there is any error then return that we got some error
    console.log('Error in logging in a user:', err);
    res.status(500).json({ message: 'some error occured' });
  }
};