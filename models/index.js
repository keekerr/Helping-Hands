const User = require('./User');
const Volunteer = require('./Volunteer');
const Event = require('./Event');

// Add in the relationships between the table (i.e. one user can have many event but each event only has one user (admin))
User.belongsToMany(Event, {
    as:'volunteer', 
    foreignKey: 'volunteer_id', 
    through: 'Volunteer'});

Event.belongsToMany(User, {
    as:'volunteered_event', 
    foreignKey: 'volunteeredEvent_id',
    through: 'Volunteer'
});

Volunteer.belongsTo(User, {
    foreignKey: "id"
});

// Event.belongsToMany(User, {
//     as:'volunteered_event', 
//     foreignKey: 'Event_id', 
//     through: 'Volunteer'});

Volunteer.belongsTo(Event, {
    foreignKey: "event_id"
});

module.exports = { User, Event, Volunteer };