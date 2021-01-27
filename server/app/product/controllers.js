const database = require('../../database');

const Product = database.products;

const create = async (req, res) => {
    if (req.body.data) {
        const data = JSON.parse(req.body.data);
        const pictureField = `picture${data.index + 1}`;
        if (req.file) data[pictureField] = req.file.filename;
        const count = await Product.count({ where: { name: data.name } });
        if (!count) await Product.create(data);
        else await Product.update(data, { where: { name: data.name }});
    } else {
        await Product.create(req.body);
    }
    res.status(201).send({ message: 'updated Successfully' });
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
