const router = require('express').Router();
const { User } = require('../../models');

// create routes to all events page


// get all route by sort category
router.get ('/all-event-details', async (req, res) => {
    try {
    // Get all events
    const allEventData = await Event.findAll({
        model: Event ,
        attributes: ['id', 'name', 'description', 'category', 'volunteersNeed', 'volunteersSignedUp' ],
        order: [['name', 'ASC']],
      // where clause for category
        where: {
        category: req.params.category
    
        }
        
    });
    
 const events = allEventData.map((event) =>{ 
        event.get({ plain: true })
        //TODO: Calculate the percentage and store it in progressPercentage
        const progressPercentage = event.volunteersNeed / event.volunteersSignedUp * 100

        return { events, progressPercentage }
    });

    // Pass serialized data into Handlebars.js template
    res.render('all-event', { myevent });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Should we do a GET for single events?? then show modal??? 

// Delete if there is time 