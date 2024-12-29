const { DataTypes } = require("sequelize");
const sequelize = require('../config/db');

const UserDetails =  sequelize.define( 'UserDetails', {
    mobile: {
        type: DataTypes.BIGINT
    }
},
{
    tableName: 'user_details'
}
)

module.exports = UserDetails;
