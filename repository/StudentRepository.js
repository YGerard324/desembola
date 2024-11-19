const StudentRepositoryInterface = require("../interface/StudentRepositoryInterface");
const { Student } = require("../data/dbContext");

class StudentRepository extends StudentRepositoryInterface {
  constructor() {
    super();
  }
  async add(req) {
    await Student.create(req);
  }

  async getById(id) {
    const student = await Student.findOne({
      where: { id },
    });
    return student;
  }

  async getAll() {
    const rows = await Student.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Student.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    //const { id } = req;
    await Student.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = StudentRepository;
