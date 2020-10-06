'use strict';

const Controller = require('egg').Controller;

class SharesController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, Shares';
  }
}

module.exports = SharesController;
