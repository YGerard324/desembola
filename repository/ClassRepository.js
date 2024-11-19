const ClassRepositoryInterface = require("../interface/ClassRepositoryInterface");
const { Class } = require("../data/dbContext");

class ClassRepository extends ClassRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Class.create(req);
  }

  async getById(id) {
    const classData = await Class.findOne({
      where: { id },
    });
    return classData;
  }

  async getAll() {
    const rows = await Class.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Class.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    await Class.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = ClassRepository;
