const express = require('express');
const ChatGptControllerClass = require('../../controllers/ChatGptController');

const ChatGptController = new ChatGptControllerClass();

const router = express.Router();

router.post('/interaction/:userId/ask', ChatGptController.interaction);

module.exports = router;
