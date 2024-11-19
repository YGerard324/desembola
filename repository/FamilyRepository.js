const FamilyRepositoryInterface = require("../interface/FamilyRepositoryInterface");
const { Family } = require("../data/dbContext");

class FamilyRepository extends FamilyRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Family.create(req);
  }

  async getById(id) {
    const family = await Family.findOne({
      where: { id },
    });
    return family;
  }

  async getAll() {
    const rows = await Family.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Family.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    await Family.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = FamilyRepository;
