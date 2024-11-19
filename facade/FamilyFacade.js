class FamilyFacade {
    constructor(familyApplication) {
      this.familyApplication = familyApplication;
    }
  
    async add(data) {
      return await this.familyApplication.add(data);
    }
  
    async getById(id) {
      return await this.familyApplication.getById(id);
    }
  
    async getAll() {
      return await this.familyApplication.getAll();
    }
  
    async update(data) {
      return await this.familyApplication.update(data);
    }
  
    async delete(id) {
      return await this.familyApplication.delete(id);
    }
  }
  
  module.exports = FamilyFacade;
  