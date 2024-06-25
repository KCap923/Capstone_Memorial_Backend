const Comment = require('../models/Comment');

// Exporting functions which are controllers to routes
module.exports = {
  index,
  create,
  update, 
  destroy,

};
// See Comment
async function index (req, res) {
  try {
    const comments = await Comment.find({});
if (Comment){
    res.status(200).json(Comments);
}
  } catch (err) {
    res.status(400).send(err);
  }
}

// Create Comment
async function create(req, res) {
  try {
    //req.body will have info the user filled out on the frontend
    const createdComment = await Comment.create(req.body);
if (createdComment){
    res.status(200).json(createdComment);
}
  } catch (err) {
    res.status(400).send(err);
  }
}

// Update Comment
async function update(req, res) {
  try {
    const updatedComment = await Comment.update(req.body);
if (updatedComment){
    res.status(200).json(updatedComment);
}
  } catch (err) {
    res.status(400).send(err);
  }
}


// Delete Comment
async function destroy(req, res) {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
if (deletedComment){
    res.status(200).json(deletedComment);
}
  } catch (err) {
    res.status(400).send(err);
  }
}


