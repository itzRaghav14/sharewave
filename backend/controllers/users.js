const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports.update = async (req, res) => {
  try {
    // if the user is not authorized then return error 403 (forbidden)
    if (req.body.userId !== req.params.id && !req.body.isAdmin) {
      res.status(403).json({ message: 'You are not authorized to update this account' });
      return;
    }

    // if the password has to be updated, hash it
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    // update the user
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    });

    // if the user is not found, return error 404 (not found)
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: 'Accout has been updated' });
  }
  catch (err) {
    console.log('Error in updating a user:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};

module.exports.delete = async (req, res) => {
  try {
    // check if the user is not authorized, return it error 403 (forbidden)
    if (req.body.userId !== req.params.id && !req.body.isAdmin) {
      res.status(403).json({ message: 'You are not authorized to delete this account' });
      return;
    }

    // find the user
    const user = await User.findById (req.params.id);

    // if the user is authorized then delete it from all the followers/followings 
    for (let otherId of user.followings) {
      await User.findByIdAndUpdate(otherId, { $pull: { followers: user.id } });
    }

    for (let otherId of user.followers) {
      await User.findByIdAndUpdate(otherId, { $pull: { followings: user.id } });
    }

    // delete its likes, comments and posts (skipped for now)

    // now delete the user
    await User.findByIdAndDelete(req.params.id);

    // if the user is not found, return error 404 (not found)
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // return status 200
    res.status(200).json({ message: "Successfully deleted the account" });
  }
  catch (err) {
    console.log('Error in deleting a user:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};

module.exports.get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    // if the user is not found, return error 404 (not found)
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // filter the data to return
    const { password, updatedAt, ...result } = user._doc;

    // return the data
    res.status(200).json({ message: "Successfully found the user", data: result });
  }
  catch (err) {
    console.log('Error in getting a user:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};

module.exports.follow = async (req, res) => {
  try {
    // if the user is trying to follow himself, tell it is not possible
    if (req.body.userId === req.params.id) {
      res.status(403).json({ message: "You can't follow yourself" });
      return;
    }

    // find the user who wants to follow and the user who is about to be followed
    let user = await User.findById(req.body.userId);
    let other = await User.findById(req.params.id);

    if (!other) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // if the user already follows the other user then give error
    if (user.followings.includes(other.id)) {
      res.status(403).json({ message: "You already follow this user" });
      return;
    }

    // follow the user
    await User.findByIdAndUpdate(user.id, { $push: { followings: other.id } });
    await User.findByIdAndUpdate(other.id, { $push: { followers: user.id } });

    // and return status 200
    res.status(200).json({ message: "User has been followed" });
  }
  catch (err) {
    console.log('Error in following a user:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};

module.exports.unfollow = async (req, res) => {
  try {
    // if the user is trying to unfollow himself, tell it is not possible
    if (req.body.userId === req.params.id) {
      res.status(403).json({ message: "You can't unfollow yourself" });
      return;
    }

    // find the user who wants to unfollow and the user who is about to be unfollowed
    const user = await User.findById(req.body.userId);
    const other = await User.findById(req.params.id);

    // if the other user doesn't exist then return error 404
    if (!other) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // if the user doesn't follow the other user then give error
    if (!user.followings.includes(other.id)) {
      res.status(403).json({ message: "You don't follow this user" });
      return;
    }

    // unfollow the user
    await User.findByIdAndUpdate(user.id, { $pull: { followings: other.id } });
    await User.findByIdAndUpdate(other.id, { $pull: { followers: user.id } });

    // and return status 200
    res.status(200).json({ message: "User has been unfollowed" });
  }
  catch (err) {
    console.log('Error in unfollowing a user:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};