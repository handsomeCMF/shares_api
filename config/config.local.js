/* eslint valid-jsdoc: "off" */

'use strict';

exports.mysql = {
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
};

exports.keys = '3136';
exports.config = {
  token_key: 'caimf_secrect_3136',
};

