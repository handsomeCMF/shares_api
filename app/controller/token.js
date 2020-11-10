'use strict';

const Controller = require('egg').Controller;
const data = require('../utils/data');

class TokenController extends Controller {
  async token() {
    const { ctx } = this;
    const params = ctx.request.body;

    const token = await ctx.service.token.getToken({ account: params.account, password: params.password });
    const result = {
      ...data,
      data: { token },
    };
    ctx.body = result;
  }
}

module.exports = TokenController;
