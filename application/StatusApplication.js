class StatusApplication {
    constructor(statusRepository) {
      this.statusRepository = statusRepository;
    }
  
    async add(data) {
      return await this.statusRepository.add(data);
    }
  
    async getById(id) {
      return await this.statusRepository.getById(id);
    }
  
    async getAll() {
      return await this.statusRepository.getAll();
    }
  
    async update(data) {
      return await this.statusRepository.update(data);
    }
  
    async delete(id) {
      return await this.statusRepository.delete(id);
    }
  }
  
  module.exports = StatusApplication;
  