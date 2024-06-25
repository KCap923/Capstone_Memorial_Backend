const Comment = require('../models/Comment');

// Exporting functions which are controllers to routes
module.exports = {
  getComment,
  createComment,
  updateComment, 
  destroyComment,

};
// See Comment
async function getComment(req, res) {
  try {
    const comments = await Comment.find({});
if (comments){
    res.status(200).json(comments);
}
  } catch (err) {
    res.status(400).send(err);
  }
}

// Create Comment
async function createComment(req, res) {
  try {
    //req.body will have info the user filled out on the frontend
    const createdComment = await Comment.create(req.body);
if (createdComment){
    res.status(200).json(createdComment);
}
  } catch (err) {
    res.status(400).send('No Beuno:(');
  }
}

// Update Comment
async function updateComment(req, res) {
  try {
    const updatedComment = await Comment.update(req.body);
if (updatedComment){
    res.status(200).json(updatedComment);
}
  } catch (err) {
    res.status(400).send('No Beuno:(');
  }
}


// Delete Comment
async function destroyComment(req, res) {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
if (deletedComment){
    res.status(200).json(deletedComment);
}
  } catch (err) {
    res.status(400).send('No Beuno:(');
  }
}


