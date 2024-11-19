const TeamRepositoryInterface = require("../interface/TeamRepositoryInterface");
const { Team } = require("../data/dbContext");

class TeamRepository extends TeamRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Team.create(req);
  }

  async getById(id) {
    const team = await Team.findOne({
      where: { id },
    });
    return team;
  }

  async getAll() {
    const rows = await Team.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Team.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    await Team.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = TeamRepository;
