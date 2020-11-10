'use strict';

const Controller = require('egg').Controller;
const data = require('../utils/data');
const { getToken } = require('../utils/token');

class AuthorizationController extends Controller {
  async getList() {
    const { ctx } = this;
    const { authorization } = ctx.request.headers;
    const token = getToken(authorization, this.config.token_key);
    console.log(token);
    const authorList = await ctx.service.author.getList() || [];
    const result = {
      ...data,
      data: authorList,
    };
    ctx.body = result;
  }

  async add() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const { authorization } = ctx.request.headers;
    const token = getToken(authorization, this.config.token_key);
    console.log(token);
    const code = await ctx.service.author.add(params);
    console.log(code);
    const result = {
      ...data,
      data: 1,
    };
    ctx.body = result;
  }
}

module.exports = AuthorizationController;
