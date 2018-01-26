var gulp=require('gulp');
var sass=require("gulp-scss");
var less=require('gulp-less');


gulp.task('copy-index',function(){
	gulp.src('index.html')
	.pipe(gulp.dest("dist"))
});

gulp.task('images',function(){
	gulp.src('images/*.jpg')
	.pipe(gulp.dest("dist/images"))
});

gulp.task('imagess',function(){
	gulp.src('images/**/*')
	.pipe(gulp.dest("dist/images"))
});

gulp.task('data',function(){
	gulp.src('json/*.json')
	.pipe(gulp.dest("dist/data"))
});
gulp.task("watch",function(){
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("images/**/*.{jpg,png}",["images"]);
	gulp.watch(["xml/*.xml","json/*.json","!json/test.json"],["data"]);
});

gulp.task('sass',function(){
	gulp.src("stylesheet/**/*.scss")
	.pipe(sass())
	.pipe(gulp.dest('dist/css'));
});
