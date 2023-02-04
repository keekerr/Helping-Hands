const router = require('express').Router();
const { Event,User } = require('../models');
const withAuth = require('../utils/auth');

// get all events and join with user data
router.get('/', async (req, res) => {
  try {
    const eventData = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ['first_name', 'last_name']
        }
      ]
    });
// serialization step
    const events = eventData.map((event) => event.get({ plain: true }));

    res.render('homepage', {
      events,
      logged_in: req.session_logged_in
      // Pass the logged in flag to the template
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// //Get individual Events from dashboard
// // TODO link to individual events from dashboard
// router.get("/dashboard/event/:id", async (req, res) => {
//   try {
//     const eventData = await Event.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["name"],
//         },
//       ],
//     });

//     const event = eventData.get({ plain: true });

//     res.render("my-event", {
//       ...event,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Write route to homepage

// router.get('/', {
//   res.render()
// })

// router.get('/',
// // withAuth, 
//  async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Event }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('homepage', {
//       ...user,
//       //logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//Renders the login page
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
 // }

  res.render( 'login' );
});

module.exports = router;
