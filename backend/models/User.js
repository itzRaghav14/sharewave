const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 12,
      unique: true
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true
    },
    password: {
      type: String,
      require: true,
      min: 6,
      max: 12
    },
    name: {
      type: String,
      require: true,
      max: 16
    },
    profilePicture: {
      type: String,
      default: ''
    },
    coverPicture: {
      type: String,
      default: ''
    },
    followers: {
      type: Array,
      default: []
    },
    followings: {
      type: Array,
      default: []
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    desc: {
      type: String,
      max: 50,
      default: ''
    },
    from: {
      type: String,
      max: 50,
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
