'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, user';
  }

  async login() {
    const { ctx } = this;
    const params = ctx.request.body;

    const result = await ctx.service.user.login({ account: params.account, password: params.password });
    ctx.body = result;
  }
}

module.exports = UserController;
