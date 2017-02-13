var elixir = require('laravel-elixir');
var uglify = require("gulp-uglifycss");

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  out
 * @param  {string|null}  options
 * @return {GulpPaths}
 */
elixir.extend("uglify", function (src, out, options) {

    src = src || elixir.config.jsOutput + '/*.js';
    out = out || elixir.config.jsOutput;
    options = options || {};

    return new elixir.Task('uglify', function () {
        return gulp.src(src)
                .pipe(uglify(options))
                .pipe(gulp.dest(out));
    });
});