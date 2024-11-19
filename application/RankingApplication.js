class RankingApplication {
    constructor(rankingRepository) {
      this.rankingRepository = rankingRepository;
    }
  
    async add(data) {
      return await this.rankingRepository.add(data);
    }
  
    async getById(id) {
      return await this.rankingRepository.getById(id);
    }
  
    async getAll() {
      return await this.rankingRepository.getAll();
    }
  
    async update(data) {
      return await this.rankingRepository.update(data);
    }
  
    async delete(id) {
      return await this.rankingRepository.delete(id);
    }
  }
  
  module.exports = RankingApplication;
  