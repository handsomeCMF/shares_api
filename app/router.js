'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const routerList = {
  userLogin: '/login',
  getAuthorList: '/author',
  addAuthor: '/author/add',
  menuList: '/author/menuList',
  sharesList: '/shareList',
  getUserList: '/getUserList',
  getToken: '/token',
};

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post(routerList.getToken, controller.token.token);
  router.get(routerList.userLogin, controller.user.login);
  router.get(routerList.getUserList, controller.user.index);
  router.get(routerList.sharesList, controller.shares.index);
  router.get(routerList.getAuthorList, controller.authorization.getList);
  router.get(routerList.menuList, controller.authorization.menuList);
  router.post(routerList.addAuthor, controller.authorization.add);
};
