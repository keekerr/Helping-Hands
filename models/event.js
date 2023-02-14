const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    event_type: {
      type: DataTypes.ENUM,
      values: [
        "Moving",
        "Food Donations",
        "Baby Sitting",
        "Fundraising",
        "Supply Donations",
      ],
      allowNull: false,
    },

    vol_need: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    event_address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    event_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Event;
