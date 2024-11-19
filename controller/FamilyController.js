const { familyFacade } = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await familyFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await familyFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    let row = await familyFacade.getById(id);
    res.status(200).json(row);
};

module.exports.update = async (req, res) => {
    let row = await familyFacade.update(req);
    res.status(200).json(row);
};

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    let row = await familyFacade.delete(id);
    res.status(200).json(row);
};
