module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        brand: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        vtaIncluded: {
            type: Sequelize.BOOLEAN
        },
        vtaUnit: {
            type: Sequelize.STRING
        },
        stockCode: {
            type: Sequelize.STRING
        },
        barCode: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        quantityUnit: {
            type: Sequelize.STRING
        },
        cargoWeight: {
            type: Sequelize.FLOAT
        },
        condition: {
            type: Sequelize.STRING
        },
        price2: {
            type: Sequelize.FLOAT
        },
        price3: {
            type: Sequelize.FLOAT
        },
        price4: {
            type: Sequelize.FLOAT
        },
        price5: {
            type: Sequelize.FLOAT
        },
        purchasePrice: {
            type: Sequelize.FLOAT
        },
        VAT: {
            type: Sequelize.FLOAT
        },
        marketPrice: {
            type: Sequelize.FLOAT
        },
        discountType: {
            type: Sequelize.STRING
        },
        discount: {
            type: Sequelize.FLOAT
        },
        transfer: {
            type: Sequelize.FLOAT
        },
        shippingCost: {
            type: Sequelize.FLOAT
        },
        productFeature: {
            type: Sequelize.STRING
        },
        featureValue: {
            type: Sequelize.STRING
        },
        moreInformation: {
            type: Sequelize.TEXT
        },
        detailedInformation: {
            type: Sequelize.TEXT
        },
        privateInformationArea: {
            type: Sequelize.BOOLEAN
        },
        hood: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.TEXT
        },
        shortDescription: {
            type: Sequelize.TEXT
        },
        SiteSearchTags: {
            type: Sequelize.TEXT
        },
        warrantyPeriod: {
            type: Sequelize.STRING
        },
        gifted: {
            type: Sequelize.STRING
        },
        usingN11Integration: {
            type: Sequelize.BOOLEAN
        },
        usingGGIntegration: {
            type: Sequelize.BOOLEAN
        },
        usingHBIntegration: {
            type: Sequelize.BOOLEAN
        },
        usingAmazonIntegration: {
            type: Sequelize.BOOLEAN
        },
        picture1: {
            type: Sequelize.STRING
        },
        picture2: {
            type: Sequelize.STRING
        },
        picture3: {
            type: Sequelize.STRING
        },
        picture4: {
            type: Sequelize.STRING
        },
        picture5: {
            type: Sequelize.STRING
        },
        picture6: {
            type: Sequelize.STRING
        },
        picture7: {
            type: Sequelize.STRING
        },
        picture8: {
            type: Sequelize.STRING
        },
        recommendedProducts: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("recommendedProducts")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("recommendedProducts", val.join(","));
                else this.setDataValue("recommendedProducts", val);
            }
        },
        combinedProducts: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("combinedProducts")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("combinedProducts", val.join(","));
                else this.setDataValue("combinedProducts", val);
            }
        },
        variant1: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("variant1")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("variant1", val.join(","));
                else this.setDataValue("variant1", val);
            }
        },
        variant2: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("variant2")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("variant2", val.join(","));
                else this.setDataValue("variant2", val);
            }
        },
        variant3: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("variant3")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("variant3", val.join(","));
                else this.setDataValue("variant3", val);
            }
        },
        variant4: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("variant4")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("variant4", val.join(","));
                else this.setDataValue("variant4", val);
            }
        },
        variant5: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("variant5")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("variant5", val.join(","));
                else this.setDataValue("variant5", val);
            }
        },
        productPageTitle: {
            type: Sequelize.STRING
        },
        keywords: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("keywords")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("keywords", val.join(","));
                else this.setDataValue("keywords", val);
            }
        },
        explanation: {
            type: Sequelize.TEXT
        },
        seoTagging: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("seoTagging")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("seoTagging", val.join(","));
                else this.setDataValue("seoTagging", val);
            }
        },
        countdownFeature: {
            type: Sequelize.STRING
        },
        countdownStart: {
            type: Sequelize.BIGINT
        },
        countdownEnd: {
            type: Sequelize.BIGINT
        },
        throwProduct: {
            type: Sequelize.BIGINT
        },
        customize: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("customize")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("customize", val.join(","));
                else this.setDataValue("customize", val);
            }
        },
        
    });
    return Product;
};
