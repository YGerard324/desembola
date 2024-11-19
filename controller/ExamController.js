const { examFacade } = require("../dependency/injection");

module.exports.add = async (req, res) => {
    let row = await examFacade.add(req.body);
    res.status(200).json(row);
};

module.exports.getAll = async (req, res) => {
    let row = await examFacade.getAll();
    res.status(200).json(row);
};

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    let row = await examFacade.getById(id);
    res.status(200).json(row);
};

module.exports.update = async (req, res) => {
    let row = await examFacade.update(req);
    res.status(200).json(row);
};

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    let row = await examFacade.delete(id);
    res.status(200).json(row);
};
