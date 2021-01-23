const database = require('../../database');

const Product = database.products;
const Op = database.Sequelize.Op;

const create = async (req, res) => {
    console.log(req.body);
    // const product = await Product.create(req.body);
    res.status(201).send(product);
};

const find = async (req, res) => {
    const products = await Product.findAll({});
    res.status(200).send(products);
};

const findById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    res.status(200).send(product);
};

const updateById = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    await Product.update(product, { where: { id }});
    res.status(201).send({ message: 'updated Successfully' });
};

const deleteById = async (req, res) => {
    const id = req.params.id;
    await Product.destroy({ where: { id }});
    res.status(201).send({ message: 'deleted Successfully' });
};

module.exports = { create, find, findById, updateById, deleteById };
