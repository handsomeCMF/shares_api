'use strict';

const getMenuList = function(menuList, childrens) {
  menuList.forEach(item => {
    const childList = childrens.filter(menu => menu.parentId === item.id);
    let child = [];
    if (childList.length) {
      child = getMenuList(childList, childrens);
    }
    item.children = child;
    console.log(item, 'item');
    return item;
  });

  return menuList;
};

const getRouterList = function(routerList) {
  // 分等级菜单
  const parentNode = routerList.filter(item => item.parentId === 0);
  return getMenuList(parentNode, routerList);
};


module.exports = {
  getRouterList,
};
