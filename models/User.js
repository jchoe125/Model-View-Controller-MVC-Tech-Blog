const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//Creating User modelName
class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
};

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    }
}, {
    //Setting up hooks for before creating a new password and before updating password
    hooks: {
        beforeCreate: async(newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate: async(updatedUserData) => {
            if (updatedUserData.password) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            }
            return updatedUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

module.exports = User;