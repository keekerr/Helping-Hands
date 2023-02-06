const User = require("");
const Volunteer = require ("./");


module.exports = {
    format_time: (date) => {
    return date.toLocaleTimeString();
    },


    compareEventUser: Handlebars.registerHelper('compareEventUserID', function(Event, user_id, User, id) {

    }),
}
        