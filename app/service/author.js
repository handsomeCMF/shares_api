'use strict';
const Service = require('egg').Service;

class AuthorService extends Service {

  async getList() {
    const result = await this.app.mysql.select('authorization');
    console.log(result);
    return result;
  }

  async getMenuList({ limit = 10, offset = 1 }) {
    const result = await this.app.mysql.select('authorization', {
      where: { isRouter: 0 }, // WHERE 条件
      limit, // 返回数据量
      offset, // 数据偏移量
    });
    console.log(result);
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
