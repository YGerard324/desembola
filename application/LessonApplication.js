class LessonApplication {
    constructor(lessonRepository) {
      this.lessonRepository = lessonRepository;
    }
  
    async add(data) {
      return await this.lessonRepository.add(data);
    }
  
    async getById(id) {
      return await this.lessonRepository.getById(id);
    }
  
    async getAll() {
      return await this.lessonRepository.getAll();
    }
  
    async update(data) {
      return await this.lessonRepository.update(data);
    }
  
    async delete(id) {
      return await this.lessonRepository.delete(id);
    }
  }
  
  module.exports = LessonApplication;
  