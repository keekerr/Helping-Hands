// The voulenteer routing will go here
const router = require("express").Router();
const { Volunteer, User, Event } = require("../../models");

// POST route for creating a volunteer event

router.post("/", async (req, res) => {
  try {
    
    console.log(req.body);
    const user = await User.create({ user_id });
    const event = await Event.create({ event_name });
    await user.addEvent(event, { through: { volunteered: true } });
    const newVolunteerEvent = await User.findOne({
      where: { user_id },
      include: Event,
    });
    console.log({ newVolunteerEvent });
    res.status(200).json({ newVolunteerEvent });
  } catch (err) {
    res.status(400).json(err);
  }
});


// router.post("/", async (req, res) => {
//   try {
//     //req.body.user_id = parseInt(req.body.user_id);
//     //req.body.event_id = parseInt(req.body.event_id);

//     console.log(req.body)
//     const newVolunteerEvent = await Volunteer.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
//     console.log({ newVolunteerEvent });
//     res.status(200).json({ newVolunteerEvent });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// GET route for retrieving all volunteer events for a specific user
router.get("/:user_id", async (req, res) => {
  try {
    
    const volunteeredEvents = await Volunteer.findAll({
      where: {
      user_id: req.session.user_id,
        volunteered: true,
      },
      include: [
        {
          model: User,
        },
        {
          model: Event,
        },
      ],
    });
    res.render("volunteered", { volunteeredEvents });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;