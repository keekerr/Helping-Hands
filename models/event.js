// Check this block of code
const  { Model, DataTypes } = require('sequelize');
const sequelize = require (config);

class Event extends Model {}

Event.init({
    event_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    id:{
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
    },
    event_type:{
        type: DataTypes.ENUM,
        values: [
        "Yard Work",
        "Moving",
        "Animal Care",
        "Babysitting"  
        ],
        allowNull: false,
        validate: {
            isAlpha: true,
            notContains: " ",
          },
    },
    vol_num:{
        type: DataTypes.INTEGER,
        allowNull:false,
        Validate: {
        min: 1,
        max: 12
        }
    },
    event_address:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {

        }
    },
    event_state: {
        type:DataTypes.STRING, 
        values: [
            "AL",
            "AK",
            "AZ",
            "AR",
            "CA",
            "CO",
            "CT",
            "DE",
            "DC",
            "FL",
            "GA",
            "HI",
            "ID",
            "IL",
            "IN",
            "IA",
            "KS",
            "KY",
            "LA",
            "ME",
            "MD",
            "MA",
            "MI",
            "MN",
            "MS",
            "MO",
            "MT",
            "NE",
            "NV",
            "NH",
            "NJ",
            "NM",
            "NY",
            "NC",
            "ND",
            "OH",
            "OK",
            "OR",
            "PA",
            "RI",
            "SC",
            "SD",
            "TN",
            "TX",
            "UT",
            "VT",
            "VI",
            "VA",
            "WA",
            "WV",
            "WI",
            "WY"],
            allowNull: false,
    },

    event_zip:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [5,10]
        }
    },
    event_description:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: 250,
        }
    },
    event_creation: {
        type: DataTypes.DATE,

    },
    event_date: {
        type: DataTypes.DATE,
        allowNull: false,
    
    },
    user_id: {
        type: DataTypes.INTEGER, 
        references: {
            model: 'user',
            key: 'id',
        },
    },

},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
    //  evet ID needs to be randomly generated
    // include all of the appropriate information for this table (see chart)
    // id:{}
        
);

module.exports = Event;