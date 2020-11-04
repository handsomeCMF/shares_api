/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = {
  mysql: {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '3136',
      database: 'shares',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  },
  keys: '3136',
  config: {
    token_key: 'caimf_secrect_3136',
  },
  security: {
    csrf: false,
    // csrf: {
    //   queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
    //   bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    // },
  },
};

