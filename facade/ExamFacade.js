class ExamFacade {
    constructor(examApplication) {
      this.examApplication = examApplication;
    }
  
    async add(data) {
      return await this.examApplication.add(data);
    }
  
    async getById(id) {
      return await this.examApplication.getById(id);
    }
  
    async getAll() {
      return await this.examApplication.getAll();
    }
  
    async update(data) {
      return await this.examApplication.update(data);
    }
  
    async delete(id) {
      return await this.examApplication.delete(id);
    }
  }
  
  module.exports = ExamFacade;
  