const StatusRepositoryInterface = require("../interface/StatusRepositoryInterface");
const { Status } = require("../data/dbContext");

class StatusRepository extends StatusRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Status.create(req);
  }

  async getById(id) {
    const status = await Status.findOne({
      where: { id },
    });
    return status;
  }

  async getAll() {
    const rows = await Status.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Status.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    await Status.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = StatusRepository;
