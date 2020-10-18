'use strict';
const token = require('../utils/token');

const Service = require('egg').Service;

class TokenService extends Service {

  async getToken({ account, password }) {
    const result = await this.app.mysql.get('user', { account, password });
    return token.setToken(result, this.config.token_key);
  }
}

module.exports = TokenService;
