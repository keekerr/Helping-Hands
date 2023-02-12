// The voulenteer routing will go here
const router = require("express").Router();
const { Volunteer } = require("../../models");

//  GET route for volunteer events
//     router.get('/', async (req, res) =>

//     )
// // DELETE routes for volunteer events
// router.delete()

// May not need this page of routes
router.post("/", async (req, res) => {
  try {
    const newVol = await Volunteer.create({
      ...req.body,

      user_id: req.session.user_id,
    });

    res.status(200).json({ newVol });
  } catch (err) {
    res.status(400).json(err);
  }
});