module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define("brand", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        url: {
            type: Sequelize.STRING
        },
        sequenceNumber: {
            type: Sequelize.INTEGER
        },
        logo: {
            type: Sequelize.STRING
        },
        label: {
            type: Sequelize.STRING
        },
        keywords: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue('keywords')?.split(',')
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue('keywords', val.join(','));
                else this.setDataValue('keywords', val);
            }
        },
        explanation: {
            type: Sequelize.TEXT
        }
    });

    return Brand;
};
