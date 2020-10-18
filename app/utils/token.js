'use strict';

const jwt = require('jsonwebtoken');

const setToken = (user, key) => {
  console.log(user);
  const payload = {
    userId: user.Id,
    userName: user.name,
    roleId: 0,
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
  };
  return jwt.sign(payload, key);
};

const getToken = (token, key) => {
  return jwt.verify(token, key, function(err, decoded) {
    if (err) {
      return 'token已过期,请重新获取token';
    }
    return decoded;
  });
}

module.exports = {
  getToken,
  setToken,
};
