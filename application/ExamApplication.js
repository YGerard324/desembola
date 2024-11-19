class ExamApplication {
    constructor(examRepository) {
      this.examRepository = examRepository;
    }
  
    async add(data) {
      return await this.examRepository.add(data);
    }
  
    async getById(id) {
      return await this.examRepository.getById(id);
    }
  
    async getAll() {
      return await this.examRepository.getAll();
    }
  
    async update(data) {
      return await this.examRepository.update(data);
    }
  
    async delete(id) {
      return await this.examRepository.delete(id);
    }
  }
  
  module.exports = ExamApplication;
  