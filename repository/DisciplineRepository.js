const DisciplineRepositoryInterface = require("../interface/DisciplineRepositoryInterface");
const { Discipline } = require("../data/dbContext");

class DisciplineRepository extends DisciplineRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Discipline.create(req);
  }

  async getById(id) {
    const discipline = await Discipline.findOne({
      where: { id },
    });
    return discipline;
  }

  async getAll() {
    const rows = await Discipline.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Discipline.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    await Discipline.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = DisciplineRepository;
