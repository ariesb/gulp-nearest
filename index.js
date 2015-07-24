var path = require('path');
var through2 = require('through2');
var PluginError = require('gulp-util').PluginError;

module.exports = function(opts) {
  opts = opts || {};
  opts.newPath = opts.newPath || '';

  return through2.obj(function(file, enc, next) {
    if (!file.isDirectory()) {
      
      var nearestParent = '';
      var dirname = path.dirname(file.relative);
      var dirs = dirname.split(path.sep);
      if (dirs.length > 0) {
        nearestParent = dirs[dirs.length - 1];
      }

      try {
        file.path = path.join(file.base, opts.newPath, nearestParent, path.basename(file.path));
        this.push(file);
      } catch (e) {
        this.emit('error', new PluginError('gulp-shorten', e));
      }
    }
    next();
  });
};