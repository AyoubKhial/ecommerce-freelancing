const database = require('../../database');

const Category = database.categories;
const Op = database.Sequelize.Op;

const create = async (req, res) => {
    const category = await Category.create(req.body);
    res.status(201).send(category);
};

const find = async (req, res) => {
    const categories = await Category.findAll({});
    res.status(200).send(categories);
};

const findById = async (req, res) => {
    const id = req.params.id;
    const category = await Category.findByPk(id);
    res.status(200).send(category);
};

const updateById = async (req, res) => {
    const id = req.params.id;
    const category = req.body;
    await Category.update(category, { where: { id }});
    res.status(201).send({ message: 'updated Successfully' });
};

const deleteById = async (req, res) => {
    const id = req.params.id;
    await Category.destroy({ where: { id }});
    res.status(201).send({ message: 'deleted Successfully' });
};

module.exports = { create, find, findById, updateById, deleteById };
