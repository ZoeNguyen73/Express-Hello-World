const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.showAllUsers);
router.get('/:username', userController.showUsername);
router.get('/:username/following', userController.showFollowingUsers);
router.get('/:username/followers', userController.showFollowerUsers);
router.post('/:username/follow', userController.addFollowUser);
router.delete('/:username/unfollow', userController.unfollowUser);
router.delete('/:username', userController.deleteAccount);

module.exports = router;
