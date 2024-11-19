class LessonFacade {
    constructor(lessonApplication) {
      this.lessonApplication = lessonApplication;
    }
  
    async add(data) {
      return await this.lessonApplication.add(data);
    }
  
    async getById(id) {
      return await this.lessonApplication.getById(id);
    }
  
    async getAll() {
      return await this.lessonApplication.getAll();
    }
  
    async update(data) {
      return await this.lessonApplication.update(data);
    }
  
    async delete(id) {
      return await this.lessonApplication.delete(id);
    }
  }
  
  module.exports = LessonFacade;
  