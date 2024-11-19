class RankingFacade {
    constructor(rankingApplication) {
      this.rankingApplication = rankingApplication;
    }
  
    async add(data) {
      return await this.rankingApplication.add(data);
    }
  
    async getById(id) {
      return await this.rankingApplication.getById(id);
    }
  
    async getAll() {
      return await this.rankingApplication.getAll();
    }
  
    async update(data) {
      return await this.rankingApplication.update(data);
    }
  
    async delete(id) {
      return await this.rankingApplication.delete(id);
    }
  }
  
  module.exports = RankingFacade;
  