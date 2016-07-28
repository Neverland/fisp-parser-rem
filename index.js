/**
 * @file fisp-parse-rem
 * @author ienix(ienix@foxmail.com)
 *
 * @since 16/7/28
 */

"use strict";

var rem = require('rem-core');

var entry = module.exports = function (content, file, conf) {

    return rem.apply(null, arguments);
};

entry.defaultOptions = {
    rem: 18,
    min: 3,
    dpr: 2,
    exclude: [
        'background', 'background-size'
    ]
};
