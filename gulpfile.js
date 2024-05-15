const {src, dest, watch ,series} = require("gulp");
const sass = require("gulp-sass")(require("sass"))

function buildStyle() {

return src('Refy/**/*.scss' )
.pipe(sass())
.pipe(dest('css'))


}

function watchTask() {
  watch(['Refy/**/*.css'], buildStyle)
}


exports.default = series(buildStyle,watchTask);