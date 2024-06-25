const { Router } = require('express');
const commentsCtrl = require('../controllers/comments.js');

// Grab Controller Functions
const router = Router(); 

// Create a comment
router.post('/', commentsCtrl.createComment);

// Get all comments
router.get('/', commentsCtrl.getComment);

// Update a comment
router.patch('/', commentsCtrl.updateComment)

// Delete a comment 
router.delete('/:id', commentsCtrl.destroyComment);

module.exports = router;
