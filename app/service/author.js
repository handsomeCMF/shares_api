'use strict';
const Service = require('egg').Service;

class AuthorService extends Service {

  async getList() {
    const result = await this.app.mysql.select('authorization');
    return result;
  }

  async add({ router, path = '', isRouter = 0, parent = '' }) {
    const result = await this.app.mysql.insert('authorization', {
      name: router,
      router: path,
      isRouter,
      parentId: parent ? parent : 0,
    });
    return result;
  }
}

module.exports = AuthorService;
