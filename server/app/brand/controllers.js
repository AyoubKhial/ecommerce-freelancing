const database = require('../../database');

const Brand = database.brands;

const create = async (req, res) => {
    const data = JSON.parse(req.body.data);
    if (req.file) data.logo = req.file.filename;
    const brand = await Brand.create(data);
    res.status(201).send(brand);
};

const find = async (req, res) => {
    const brands = await Brand.findAll({});
    res.status(200).send(brands);
};

const findById = async (req, res) => {
    const id = req.params.id;
    const brand = await Brand.findByPk(id);
    res.status(200).send(brand);
};

const updateById = async (req, res) => {
    const id = req.params.id;
    const brand = JSON.parse(req.body.data);
    data.logo = req.file.filename;
    await Brand.update(brand, { where: { id }});
    res.status(201).send({ message: 'updated Successfully' });
};

const deleteById = async (req, res) => {
    const id = req.params.id;
    await Brand.destroy({ where: { id }});
    res.status(201).send({ message: 'deleted Successfully' });
};

module.exports = { create, find, findById, updateById, deleteById };
