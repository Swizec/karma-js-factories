var path = require('path');

var pattern = function (file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var framework = function (files) {
    files.unshift(pattern(path.resolve(require.resolve('js-factories'), '../../pkg/js-factories.js')));
};

framework.$inject = ['config.filed'];
module.exports = {'framework:js-factories': ['factory', framework]};
