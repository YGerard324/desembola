const LessonRepositoryInterface = require("../interface/LessonRepositoryInterface");
const { Lesson } = require("../data/dbContext");

class LessonRepository extends LessonRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Lesson.create(req);
  }

  async getById(id) {
    const lesson = await Lesson.findOne({
      where: { id },
    });
    return lesson;
  }

  async getAll() {
    const rows = await Lesson.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Lesson.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    await Lesson.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = LessonRepository;
