const router = require('express').Router();
const { saveProfilePicture } = require('./../middleware/multer.js');
const userController = require('../controllers/user.controller.js');
const chatController = require('../controllers/chat.controller.js')
const findUserByLogin = require('./../middleware/findUserByLogin.js');
const comparePassword = require('./../middleware/comparePassword.js');
const findChatById = require('../middleware/findChatById.js')

router.post('/sign_up',
            saveProfilePicture,
            userController.savePicture,
            userController.createUser);

router.post('/login',
            findUserByLogin,
            comparePassword,
            userController.getUser,

);
router.post('/chat',
            chatController.createChat
            )

router.post('/chat/:chatId/users',
            findChatById,
            chatController.joinToChat)

router.post('/chat/:chatId/message',
            findChatById,
            chatController.createMessages,
)
module.exports = router;