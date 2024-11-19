class DisciplineApplication {
    constructor(disciplineRepository) {
      this.disciplineRepository = disciplineRepository;
    }
  
    async add(data) {
      return await this.disciplineRepository.add(data);
    }
  
    async getById(id) {
      return await this.disciplineRepository.getById(id);
    }
  
    async getAll() {
      return await this.disciplineRepository.getAll();
    }
  
    async update(data) {
      return await this.disciplineRepository.update(data);
    }
  
    async delete(id) {
      return await this.disciplineRepository.delete(id);
    }
  }
  
  module.exports = DisciplineApplication;
  