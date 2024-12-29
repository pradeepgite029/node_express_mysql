const { DataTypes } = require("sequelize");
const sequelize = require('../config/db');
const UserDetails = require('./user-details');

const User =  sequelize.define( 'User', {
    first_name: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'users'
}
)

User.userDetail = User.hasOne(UserDetails);
module.exports = User;
