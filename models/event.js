// Check this block of code
const  { Model, DataTypes } = require('sequelize');
// const sequelize = require (config)

class Event extends Model {}

Event.init({
    // id:{}
    event_name:{

    },
    id:{

    },
    event_type:{
        // see chat code
    },
    vol_num:{

    },
    event_address:{

    },
    event_zip:{

    },
    event_description:{

    },
    creation_date:{

    },
    

}
    //  evet ID needs to be randomly generated
    // include all of the appropriate information for this table (see chart)
    // id:{}
        
);

module.exports = Event;