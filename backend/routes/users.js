const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/users');

router.get ('/:id', userController.get);
router.put ('/:id', userController.update);
router.delete ('/:id', userController.delete);
router.put ('/:id/follow', userController.follow);
router.put ('/:id/unfollow', userController.unfollow);

module.exports = router;