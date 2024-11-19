class TeacherFacade {
    constructor(teacherApplication) {
      this.teacherApplication = teacherApplication;
    }
  
    async add(data) {
      return await this.teacherApplication.add(data);
    }
  
    async getById(id) {
      return await this.teacherApplication.getById(id);
    }
  
    async getAll() {
      return await this.teacherApplication.getAll();
    }
  
    async update(data) {
      return await this.teacherApplication.update(data);
    }
  
    async delete(id) {
      return await this.teacherApplication.delete(id);
    }
  }
  
  module.exports = TeacherFacade;
  