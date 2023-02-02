const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./myEventsRoutes');
const volunteerRoutes = require('./volunteerRoutes');

router.use('/users', userRoutes);
// figure out the proper paths!!
router.use('/myEvents', eventRoutes);
router.use('/volunteerRoutes', volunteerRoutes);

module.exports = router;