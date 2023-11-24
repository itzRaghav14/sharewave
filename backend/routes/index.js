const router = require ('express').Router();

// routes
router.use('/api/users', require('./users'));
router.use('/api/auth', require('./auth'));
router.use('/api/posts', require('./posts'));

module.exports = router;