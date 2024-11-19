class DisciplineFacade {
    constructor(disciplineApplication) {
      this.disciplineApplication = disciplineApplication;
    }
  
    async add(data) {
      return await this.disciplineApplication.add(data);
    }
  
    async getById(id) {
      return await this.disciplineApplication.getById(id);
    }
  
    async getAll() {
      return await this.disciplineApplication.getAll();
    }
  
    async update(data) {
      return await this.disciplineApplication.update(data);
    }
  
    async delete(id) {
      return await this.disciplineApplication.delete(id);
    }
  }
  
  module.exports = DisciplineFacade;
  