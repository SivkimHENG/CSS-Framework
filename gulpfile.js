const {src, dest, watch ,series} = require("gulp");
const sass = require("gulp-sass")(require("sass"))
const purgecss = require('gulp-purgecss')
function buildStyle() {

return src('Refy/**/*.scss' )
.pipe(sass())
.pipe(purgecss({content: ['*.html']}))
.pipe(dest('css'))


}

function watchTask() {
  watch(['Refy/**/*.css','*.html'], buildStyle)
}


exports.default = series(buildStyle,watchTask);