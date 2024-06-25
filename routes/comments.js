const { Router } = require('express');
const commentsCtrl = require('../controllers/comments.js');

// Grab Controller Functions
const router = Router(); 

// Create a comment
router.post('/', commentsCtrl.create);

// Get all comments
router.get('/', commentsCtrl.index);

// Update a comment
router.patch('/', commentsCtrl.update)

// Delete a comment 
router.delete('/:id', commentsCtrl.destroy);

module.exports = router;
