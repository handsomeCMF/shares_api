'use strict';

const Controller = require('egg').Controller;
const { getToken } = require('../utils/token');

class PermissionController extends Controller {
  async index() {
    const { ctx } = this;
    const { authorization } = ctx.request.headers;
    const token = getToken(authorization, this.config.token_key);
    ctx.body = token;
  }
}

module.exports = PermissionController;
