const database = require('../../database');

const Variant = database.variants;

const create = async (req, res) => {
    const variant = await Variant.create(req.body);
    res.status(201).send(variant);
};

const find = async (req, res) => {
    const variants = await Variant.findAll({});
    res.status(200).send(variants);
};

const findById = async (req, res) => {
    const id = req.params.id;
    const variant = await Variant.findByPk(id);
    res.status(200).send(variant);
};

const updateById = async (req, res) => {
    const id = req.params.id;
    const variant = req.body;
    await Variant.update(variant, { where: { id }});
    res.status(201).send({ message: 'updated Successfully' });
};

const deleteById = async (req, res) => {
    const id = req.params.id;
    await Variant.destroy({ where: { id }});
    res.status(201).send({ message: 'deleted Successfully' });
};

module.exports = { create, find, findById, updateById, deleteById };
