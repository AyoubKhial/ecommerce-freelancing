module.exports = (sequelize, Sequelize) => {
    const Variant = sequelize.define("variant", {
        name: {
            type: Sequelize.STRING,
        },
        values: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue('values')?.split(',')
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue('values', val.join(','));
                else this.setDataValue('values', val);
            }
        }
    });

    return Variant;
};
