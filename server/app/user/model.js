const { sign } = require("jsonwebtoken");
const { compare, genSaltSync, hashSync } = require("bcryptjs");
const { createHash, randomBytes } = require("crypto");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    User.prototype.getSignedJwtToken = function () {
        return sign({ id: this.id }, "secret", { expiresIn: 30 });
    };

    User.prototype.matchPassword = async function (password) {
        return compare(password, this.password);
    };

    const setPassword = async function (user) {
        if (user.changed("password")) {
            const salt = genSaltSync();
            user.password = hashSync(user.password, salt);
        }
    };

    User.beforeCreate(setPassword);

    return User;
};
