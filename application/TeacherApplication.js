class TeacherApplication {
    constructor(teacherRepository) {
      this.teacherRepository = teacherRepository;
    }
  
    async add(data) {
      return await this.teacherRepository.add(data);
    }
  
    async getById(id) {
      return await this.teacherRepository.getById(id);
    }
  
    async getAll() {
      return await this.teacherRepository.getAll();
    }
  
    async update(data) {
      return await this.teacherRepository.update(data);
    }
  
    async delete(id) {
      return await this.teacherRepository.delete(id);
    }
  }
  
  module.exports = TeacherApplication;
  