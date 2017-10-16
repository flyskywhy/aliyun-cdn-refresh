"use strict";
var async = require('async');
var urllib = require('urllib');
var util = require('./util');
var types = require('./config.json').types;
var actions = require('./config.json').actions;

exports = module.exports = (require('./base'))();

exports.fn.refreshFile = function (url, callback) {
  request(this, url, types['file'], actions['refresh'], callback);
};

exports.fn.refreshDir = function (url, callback) {
  request(this, url, types['dir'], actions['refresh'], callback);
};

exports.fn.refreshFiles = function (urls, callback) {
  async.each(urls, (url, async_cb) => {
    this.refreshFile(url, async_cb);
  }, callback);
};

exports.fn.pushFile = function (url, callback) {
  request(this, url, types['file'], actions['push'], callback);
};

exports.fn.pushFiles = function (urls, callback) {
  async.each(urls, (url, async_cb) => {
    this.pushFile(url, async_cb);
  }, callback);
};

function request(client, url, type, action, callback) {
  var requestUrl = client._getUrl(url, type, action);
  var timeout = client._getTimeOut();
  urllib.request(requestUrl, {
    method: 'GET',
    headers: util.getHeaders(),
    timeout: timeout
  }, function (err, data, res) {
    var result;
    if (data) {
      result = {
        data: JSON.parse(data.toString()),
        res: res
      };
    }
    callback(err, result);
  });
}
