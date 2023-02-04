const User = require('./User');
const Volunteer = require('./Volunteer');
const Event = require('./Event');

// Add in the relationships between the table (i.e. one user can have many event but each event only has one user (admin))
User.belongsToMany(Event, {
    // as:'volunteer', 
    foreignKey: 'user_id', 
    through: 'Volunteer'});
    // make sure to add an on delete cascae and might remove as:

Event.belongsToMany(User, {
    // as:'volunteered_event', 
    foreignKey: 'event_id',
    through: 'Volunteer'
    // make sure to add an on delete cascae and might remove as:
});
User.hasMany(Event, {
    foreignKey: 'user_id',
    through: 'Event'
});
Event.hasOne(User, {
    foreignKey: 'user_id',
    through: 'Event'
});

// Volunteer.belongsTo(User, {
//     foreignKey: "id"
//     // will not work because it in incremental
// });
// already happening in line 6

// Event.belongsToMany(User, {
//     as:'volunteered_event', 
//     foreignKey: 'Event_id', 
//     through: 'Volunteer'});

// Volunteer.belongsTo(Event, {
//     foreignKey: "event_id"
// });
// one to many relationship, one user with many events
module.exports = { User, Event, Volunteer };