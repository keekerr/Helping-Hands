const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./myEventsRoutes');
const volunteerRoutes = require('./volunteerRoutes');



router.use('/users', userRoutes);

router.use('/myEvents', eventRoutes);

router.use("/volunteer", volunteerRoutes);

// TODO: Uncomment when volunteer route is finished



//router.use('/allEvents', allEventsRoutes);

module.exports = router;