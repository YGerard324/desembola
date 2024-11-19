const { statusFacade } = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await statusFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await statusFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    let row = await statusFacade.getById(id);
    res.status(200).json(row);
};

module.exports.update = async (req, res) => {
    let row = await statusFacade.update(req);
    res.status(200).json(row);
};

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    let row = await statusFacade.delete(id);
    res.status(200).json(row);
};
