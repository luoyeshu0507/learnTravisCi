var gulp=require("gulp");
var sass=require("gulp-sass");
gulp.task("default",function(){
	return gulp.src("front/sass/*.scss")
			.pipe(sass({outputStyle: 'compact'}))
			.pipe(gulp.dest("front/css"))
});