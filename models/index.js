const User = require('./User');
const Event = require('./Event');

User.belongsToMany(Event, {
    as:'volunteer', 
    foreignKey: 'volunteer_id', 
    through: 'Volunteer'
});

Event.belongsToMany(User, {
    as:'volunteered_event', 
    foreignKey: 'volunteeredEvent_id',
    through: 'Volunteer'
});

module.exports = { User, Event };