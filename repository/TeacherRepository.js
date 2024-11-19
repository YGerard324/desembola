const TeacherRepositoryInterface = require("../interface/TeacherRepositoryInterface");
const { Teacher } = require("../data/dbContext");

class TeacherRepository extends TeacherRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Teacher.create(req);
  }

  async getById(id) {
    const teacher = await Teacher.findOne({
      where: { id },
    });
    return teacher;
  }

  async getAll() {
    const rows = await Teacher.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Teacher.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    await Teacher.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = TeacherRepository;
