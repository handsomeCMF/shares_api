'use strict';

const Controller = require('egg').Controller;

class PermissionController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, permission';
  }
}

module.exports = PermissionController;
