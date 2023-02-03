const router = require('express').Router();
const { Event,User } = require('../models');
const withAuth = require('../utils/auth');

// get all events and join with user data
router.get('/', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ['name']
        }
      ]
    });
// serialization step
    const events = eventData.map((main) => main.get({ plain: true }));

    res.render('homepage', {
      events,
      // Pass the logged in flag to the template
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get individual projects
router.get("/event/:id", async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const event = eventData.get({ plain: true });

    res.render("my-event", {
      ...event,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Renders the login page
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render( 'login' );
});

module.exports = router;
