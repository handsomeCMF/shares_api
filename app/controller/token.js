'use strict';

const Controller = require('egg').Controller;

class TokenController extends Controller {
  async token() {
    const { ctx } = this;
    const params = ctx.request.body;

    const token = await ctx.service.token.getToken({ account: params.account, password: params.password });
    const result = token;
    ctx.body = result;
  }
}

module.exports = TokenController;
