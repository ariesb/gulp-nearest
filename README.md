# [gulp](http://gulpjs.com)-nearest

>Remove relative path except for the nearest parent

## Install

```
npm install gulp-nearest
```

```js
var nearest = require('gulp-nearest');

gulp.src('bower_components/**/*.js')
  .pipe(nearest())
  .pipe(gulp.dest('build/js'));
```