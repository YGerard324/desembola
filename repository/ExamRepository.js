const ExamRepositoryInterface = require("../interface/ExamRepositoryInterface");
const { Exam } = require("../data/dbContext");

class ExamRepository extends ExamRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Exam.create(req);
  }

  async getById(id) {
    const exam = await Exam.findOne({
      where: { id },
    });
    return exam;
  }

  async getAll() {
    const rows = await Exam.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Exam.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    await Exam.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = ExamRepository;
