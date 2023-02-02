const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userRoutes = require('./myEventsRoutes');
const userRoutes = require('./volunteerRoutes');

router.use('/users', userRoutes);
// figure out the proper paths!!
router.use('/myEvents', userRoutes);
router.use('/volunteerRoutes', userRoutes);

module.exports = router;