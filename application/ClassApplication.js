class ClassApplication {
    constructor(classRepository) {
      this.classRepository = classRepository;
    }
  
    async add(data) {
      return await this.classRepository.add(data);
    }
  
    async getById(id) {
      return await this.classRepository.getById(id);
    }
  
    async getAll() {
      return await this.classRepository.getAll();
    }
  
    async update(data) {
      return await this.classRepository.update(data);
    }
  
    async delete(id) {
      return await this.classRepository.delete(id);
    }
  }
  
  module.exports = ClassApplication;
  