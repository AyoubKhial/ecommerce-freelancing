const database = require('../../database');

const Feature = database.features;
const Op = database.Sequelize.Op;

const create = async (req, res) => {
    const feature = await Feature.create(req.body);
    res.status(201).send(feature);
};

const find = async (req, res) => {
    const features = await Feature.findAll({});
    res.status(200).send(features);
};

const findById = async (req, res) => {
    const id = req.params.id;
    const feature = await Feature.findByPk(id);
    res.status(200).send(feature);
};

const updateById = async (req, res) => {
    const id = req.params.id;
    const feature = req.body;
    await Feature.update(feature, { where: { id }});
    res.status(201).send({ message: 'updated Successfully' });
};

const deleteById = async (req, res) => {
    const id = req.params.id;
    await Feature.destroy({ where: { id }});
    res.status(201).send({ message: 'deleted Successfully' });
};

module.exports = { create, find, findById, updateById, deleteById };
