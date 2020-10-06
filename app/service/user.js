'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  async login({ account, password }) {
    const result = await this.app.mysql.get('user', { account, password });
    // const result = await this.app.mysql.select('user', {
    //   where: { account, password },
    //   columns: [ 'Id' ],
    //   limit: 1,
    // });

    return result;
  }
}

module.exports = UserService;
