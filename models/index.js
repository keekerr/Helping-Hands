// empty model to be filled in 
const User = require('./User');
const Volunteer = require('.Volunteer');
const Event = require('./Event');

// Add in the relationships between the table (i.e. one user can have many event but each event only has one user (admin))
User.hasMany(Event, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Event.belongsTo(User, {
    foreignKey: 'id'
});

Volunteer.belongsTo(User, {
    foreignKey: "id"
});

Event.hasMany({

});

Volunteer.belongsTo(Event, {
    foreignKey: "event_id"
});

module.exports = { User, Event, Volunteer };