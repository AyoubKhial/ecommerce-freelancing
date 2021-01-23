module.exports = (sequelize, Sequelize) => {
    const Feature = sequelize.define("feature", {
        sequenceNumber: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        }
    });

    return Feature;
};
