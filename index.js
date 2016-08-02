/**
 * @file fisp-parse-rem
 * @author ienix(ienix@foxmail.com)
 *
 * @since 16/7/28
 */

"use strict";

var rem = require('rem-core');

module.exports = function (content, file, conf) {

    return rem.apply(null, arguments);
};
