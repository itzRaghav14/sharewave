const Post = require('../models/Post');
const User = require('../models/User');

module.exports.create = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json({ message: "Post has been created", data: post });
  }
  catch (err) {
    console.log('Error in creating a post:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};

module.exports.update = async (req, res) => {
  try {
    // find the post
    const post = await Post.findById(req.params.id);

    // if post not found then return error 404
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    // if the user is not author of post then return error 403
    if (post.userId !== req.body.userId) {
      res.status(403).json({ message: "You are not authorized to update this post" });
      return;
    }

    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Post has been updated" });
  }
  catch (err) {
    console.log('Error in updating a post:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};

module.exports.delete = async (req, res) => {
  try {
    // find the post
    const post = await Post.findById(req.params.id);

    // if the post not found then return 404
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    // if the user is not authorized then return 403
    if (post.userId !== req.body.userId) {
      res.status(403).json({ message: "You are not authorized to delete this post" });
      return;
    }

    // otherwise delete the post and return 200
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post has been deleted" });
  }
  catch (err) {
    console.log('Error in deleting a post:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};

module.exports.like = async (req, res) => {
  try {
    // find the post
    const post = await Post.findById(req.params.id);

    // if post not found, return 404
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    // if the post has not been liked yet then like it
    if (!post.likes.includes(req.body.userId)) {
      await Post.findByIdAndUpdate(req.params.id, { $push: { likes: req.body.userId } });
      res.status(200).json({ message: "Liked the post" });
    }
    // else unlike it
    else {
      await Post.findByIdAndUpdate(req.params.id, { $pull: { likes: req.body.userId } });
      res.status(200).json({ message: "Unliked the post" });
    }
  }
  catch (err) {
    console.log('Error in liking a post:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};

module.exports.get = async (req, res) => {
  try {
    // get the post
    const post = await Post.findById(req.params.id);

    // if post not found return 404
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    // filter content to pass (no need of removing or adding anything for now)

    // return the post content and 200
    res.status(200).json({ message: "Post has been found", data: post });
  }
  catch (err) {
    console.log('Error in getting a post:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};

module.exports.timeline = async (req, res) => {
  try {
    // find the user 
    const user = await User.findById(req.body.userId);

    if (!user) {
      res.status(500).json({ message: "Didn't find the user" });
      return;
    }

    // find all the posts created by that user
    const userPosts = await Post.find({ userId: user.id });

    // find all the posts created by the people whom the user follows and are created within 1 week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const friendPosts = await Post.find({
      createdAt: { $gte: oneWeekAgo },
      userId: { $in: user.followings }
    });
    // filter the posts
    const posts = [...userPosts, ...friendPosts];
    posts.sort((left, right) => {
      return right.createdAt - left.createdAt;
    });

    // return the result
    res.status(200).json({ message: "Got the post timeline", data: posts });
  }
  catch (err) {
    console.log('Error in getting post timeline:', err);
    res.status(500).json({ message: 'Some error occured' });
  }
};
