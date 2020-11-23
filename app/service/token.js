'use strict';
const token = require('../utils/token');
const Service = require('egg').Service;
const data = require('../utils/data');

class TokenService extends Service {

  async getToken({ account, password }) {
    const result = await this.app.mysql.get('user', { account, password });
    if (!result) {
      return {
        ...data,
        status: 500,
        message: '账号密码错误！！！',
      };
    }
    const userToken = token.setToken(result, this.config.token_key);
    return { ...data, data: userToken };
  }
}

module.exports = TokenService;
