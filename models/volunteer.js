const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Volunteer extends Model {}

Volunteer.init({
   
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Event",
        key: "id",
      },
    },
    
    // volunteer_type: {
    //   type: DataTypes.ENUM,
    //   values: [
    //     "Moving",
    //     "Food Donations",
    //     "Baby Sitting",
    //     "Fundraising",
    //     "Supply Donations",
    //   ],
    // },
    // volunteer_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    // },
  
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Volunteer",
  }
);

module.exports = Volunteer;
