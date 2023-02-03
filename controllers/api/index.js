const router = require('express').Router();
const userRoutes = require('./userRoutes');

const eventRoutes = require('./myEventsRoutes');
const volunteerRoutes = require('./volunteerRoutes');
const allEventsRoutes = require('./allEventsRoutes');

router.use('/users', userRoutes);
// figure out the proper paths!!
// FIX
router.use('/myEvents', eventRoutes);
// /api/volunteers
// TODO: Uncomment when volunteer route is finished
//router.use('/volunteer', volunteerRoutes);
// /api/events
router.use('/events', allEventsRoutes);

module.exports = router;