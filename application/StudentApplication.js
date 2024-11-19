class StudentApplication {
    constructor(studentRepository) {
      this.studentRepository = studentRepository;
    }
  
    async add(data) {
      return await this.studentRepository.add(data);
    }
  
    async getById(id) {
      return await this.studentRepository.getById(id);
    }
  
    async getAll() {
      return await this.studentRepository.getAll();
    }
  
    async update(data) {
      return await this.studentRepository.update(data);
    }
  
    async delete(id) {
      return await this.studentRepository.delete(id);
    }
  }
  
  module.exports = StudentApplication;
  