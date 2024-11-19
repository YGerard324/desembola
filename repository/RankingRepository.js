const RankingRepositoryInterface = require("../interface/RankingRepositoryInterface");
const { Ranking } = require("../data/dbContext");

class RankingRepository extends RankingRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Ranking.create(req);
  }

  async getById(id) {
    const ranking = await Ranking.findOne({
      where: { id },
    });
    return ranking;
  }

  async getAll() {
    const rows = await Ranking.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Ranking.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    await Ranking.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = RankingRepository;
