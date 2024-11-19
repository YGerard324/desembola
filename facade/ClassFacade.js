class ClassFacade {
    constructor(classApplication) {
      this.classApplication = classApplication;
    }
  
    async add(data) {
      return await this.classApplication.add(data);
    }
  
    async getById(id) {
      return await this.classApplication.getById(id);
    }
  
    async getAll() {
      return await this.classApplication.getAll();
    }
  
    async update(data) {
      return await this.classApplication.update(data);
    }
  
    async delete(id) {
      return await this.classApplication.delete(id);
    }
  }
  
  module.exports = ClassFacade;
  