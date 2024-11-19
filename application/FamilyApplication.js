class FamilyApplication {
    constructor(familyRepository) {
      this.familyRepository = familyRepository;
    }
  
    async add(data) {
      return await this.familyRepository.add(data);
    }
  
    async getById(id) {
      return await this.familyRepository.getById(id);
    }
  
    async getAll() {
      return await this.familyRepository.getAll();
    }
  
    async update(data) {
      return await this.familyRepository.update(data);
    }
  
    async delete(id) {
      return await this.familyRepository.delete(id);
    }
  }
  
  module.exports = FamilyApplication;
  