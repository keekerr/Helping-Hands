// empty model to be filled in
// check this block of code
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection') //**Config

// Check this block of code (this is for password login)
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init({
    // Automatically Increments to each User ID (remember to add informaiton for keys)
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    birth_date:{
        // Check that this is the correct data type
        type:DataTypes.DATE,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true,
      },
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [12],
      },
    },
      location_state:{
        // needs to be a drop down/select from a list (research)
        type: DataTypes.ENUM,
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
            // missing code for validation?
    },
    location_zipcode:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    // conditional statement to prevent duplicate user accounts

},
    {sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'}
);

module.exports = User;