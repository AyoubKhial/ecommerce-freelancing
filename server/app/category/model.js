module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
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
        priceRatio: {
            type: Sequelize.INTEGER
        },
        isCombine: {
            type: Sequelize.BOOLEAN
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

    return Category;
};
