class StudentFacade {
    constructor(studentApplication) {
      this.studentApplication = studentApplication;
    }
  
    async add(data) {
      return await this.studentApplication.add(data);
    }
  
    async getById(id) {
      return await this.studentApplication.getById(id);
    }
  
    async getAll() {
      return await this.studentApplication.getAll();
    }
  
    async update(data) {
      return await this.studentApplication.update(data);
    }
  
    async delete(id) {
      return await this.studentApplication.delete(id);
    }
  }
  
  module.exports = StudentFacade;
  