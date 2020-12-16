'use strict';

const Controller = require('egg').Controller;
const data = require('../utils/data');
const { getToken } = require('../utils/token');
const { getRouterList } = require('../utils/author');

class AuthorizationController extends Controller {
  async getList() {
    const { ctx } = this;
    const { authorization } = ctx.request.headers;
    const token = getToken(authorization, this.config.token_key);
    const authorList = await ctx.service.author.getList() || [];
    const result = {
      ...data,
      data: authorList,
    };
    ctx.body = result;
  }

  async menuList() {
    const { ctx } = this;
    const { authorization, page, perPage } = ctx.request.headers;
    const token = getToken(authorization, this.config.token_key);
    const menuList = await ctx.service.author.getMenuList({ perPage, page }) || [];
    const result = {
      ...data,
      data: menuList,
    };
    ctx.body = result;
  }

  async add() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { authorization } = ctx.request.headers;
    const token = getToken(authorization, this.config.token_key);
    const code = await ctx.service.author.add(params);
    const result = {
      ...data,
      data: 1,
    };
    ctx.body = result;
  }

  async userAuthor() {
    const { ctx } = this;
    const { authorization } = ctx.request.headers;
    const token = getToken(authorization, this.config.token_key);
    const menuList = await ctx.service.author.userAuthor({ userId: token.userId || 1 }) || [];

    const routerList = getRouterList(menuList);

    const result = {
      ...data,
      data: routerList,
    };
    ctx.body = result;
  }
}

module.exports = AuthorizationController;
