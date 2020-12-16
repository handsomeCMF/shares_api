'use strict';
const Service = require('egg').Service;

class AuthorService extends Service {

  async getList() {
    const result = await this.app.mysql.select('authorization');
    return result;
  }

  async getMenuList({ limit = 10, offset = 1 }) {
    const result = await this.app.mysql.select('authorization', {
      where: { isRouter: 0 }, // WHERE 条件
      limit, // 返回数据量
      offset, // 数据偏移量
    });
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

  async userAuthor({ userId }) {
    const sql = 'select authorization.id, user.name, user.roleId, authorId, authorization.name, '
      + ' authorization.isRouter, authorization.parentId,authorization.router'
      + ' from user '
      + ' left join role on role.id=user.roleId'
      + ' left join role_author on role_author.roleId=role.id'
      + ' left join authorization on authorization.id=role_author.authorId';
    const where = ` where user.id=${userId}`;
    const result = await this.app.mysql.query(sql + where);

    return result;
  }

}

module.exports = AuthorService;
