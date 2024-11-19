class StatusFacade {
    constructor(statusApplication) {
      this.statusApplication = statusApplication;
    }
  
    async add(data) {
      return await this.statusApplication.add(data);
    }
  
    async getById(id) {
      return await this.statusApplication.getById(id);
    }
  
    async getAll() {
      return await this.statusApplication.getAll();
    }
  
    async update(data) {
      return await this.statusApplication.update(data);
    }
  
    async delete(id) {
      return await this.statusApplication.delete(id);
    }
  }
  
  module.exports = StatusFacade;
  