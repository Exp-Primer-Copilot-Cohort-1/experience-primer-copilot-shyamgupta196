// Create web server with express
// Create a comment router to handle all comment related routes
// Create a comment controller to handle all comment related logic

const express = require('express');
const commentRouter = express.Router();

const commentController = require('../controllers/commentController');

// Create a comment
commentRouter.post('/', commentController.createComment);

// Get all comments
commentRouter.get('/', commentController.getAllComments);

// Get a comment by id
commentRouter.get('/:id', commentController.getCommentById);

// Update a comment
commentRouter.put('/:id', commentController.updateComment);

// Delete a comment
commentRouter.delete('/:id', commentController.deleteComment);

module.exports = commentRouter;
