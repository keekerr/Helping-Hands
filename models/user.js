// empty model to be filled in
// check this block of code
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
// const sequelize = require('..') **Config

// Check this block of code (this is for password login)
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init({
    // add code to make id automatically populate
    id:{},
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
        len: [8],
      },
    },
    location_state:{
        // needs to be a drop down/select from a list (research)
    },
    location_zipcode:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },


}
    // {           *** This needs to be randomly assigned
   
    // }

    // Need all login info needed (see chart )

    // After adding all information needed for the user login, need to create a funciton to check logs to see if account already exists

)

module.exports = User;