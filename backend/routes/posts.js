const router = require('express').Router();
const postController = require('../controllers/posts');

router.post('/create', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);
router.put('/:id/like', postController.like);

router.get('/timeline', postController.timeline);
router.post('/timeline', postController.timeline);

router.get('/:id', postController.get);

module.exports = router;