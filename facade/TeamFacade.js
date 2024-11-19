class TeamFacade {
    constructor(teamApplication) {
      this.teamApplication = teamApplication;
    }
  
    async add(data) {
      return await this.teamApplication.add(data);
    }
  
    async getById(id) {
      return await this.teamApplication.getById(id);
    }
  
    async getAll() {
      return await this.teamApplication.getAll();
    }
  
    async update(data) {
      return await this.teamApplication.update(data);
    }
  
    async delete(id) {
      return await this.teamApplication.delete(id);
    }
  }
  
  module.exports = TeamFacade;
  