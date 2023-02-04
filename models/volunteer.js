// Check this block of code
const  { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection')

class Volunteer extends Model {}

Volunteer.init(
    {
    // this is coming from the user ID, Foreign Key?)
    // User ID AND ID need to be different 
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
      // This is coming from the event ID, (Foreign Key?)
    event_id:{
        type: DataTypes.INTEGER,
        references: {
        model: "event",
        key: "id",
      },
        //autoIncrement: true, 
    },  
    //Can this be a foreign key? if not date needs to change  
    volunteer_type:{
        type: DataTypes.ENUM,
        values: [
            "Moving",
            "Food Donations",
            "Baby Sitting",
            "Fundraising",
            "Supply Donations"],
    },
    volunteer_date:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    // volunteer_status:{
    //     type: DataTypes.BIT,
    //     // change to an ENUM?
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },

    //  conditional statement to check if they have volunnteered for that event already
},    

    {sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'  }
);

module.exports = Volunteer;
