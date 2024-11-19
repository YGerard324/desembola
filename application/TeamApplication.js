class TeamApplication {
    constructor(teamRepository) {
      this.teamRepository = teamRepository;
    }
  
    async add(data) {
      return await this.teamRepository.add(data);
    }
  
    async getById(id) {
      return await this.teamRepository.getById(id);
    }
  
    async getAll() {
      return await this.teamRepository.getAll();
    }
  
    async update(data) {
      return await this.teamRepository.update(data);
    }
  
    async delete(id) {
      return await this.teamRepository.delete(id);
    }
  }
  
  module.exports = TeamApplication;
  