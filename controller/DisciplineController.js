const { disciplineFacade } = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await disciplineFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await disciplineFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    let row = await disciplineFacade.getById(id);
    res.status(200).json(row);
};

module.exports.update = async (req, res) => {
    let row = await disciplineFacade.update(req);
    res.status(200).json(row);
};

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    let row = await disciplineFacade.delete(id);
    res.status(200).json(row);
};