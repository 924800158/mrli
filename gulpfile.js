var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('compilescss',function(){
    gulp.src('style/sass/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('style/css'))
});
gulp.task('copyindex',function(){

    gulp.src('index.html')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\yanxuan'))
});
gulp.task('copyfont',function(){
    
        gulp.src('font/**/*')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\yanxuan\\font'))
    });
gulp.task('copyhtml',function(){
    
        gulp.src('html/**/*')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\yanxuan\\html'))
    });
gulp.task('copyimg',function(){
        gulp.src('images/**/*')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\yanxuan\\images'))
    });
gulp.task('copycss',function(){
    gulp.src('style/css/**/*')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\yanxuan\\style\\css'))
});
gulp.task('copyjs',function(){
    gulp.src('js/**/*')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\yanxuan\\js'));
});
gulp.task('watchall',function(){
    gulp.watch('style/sass/*.scss',['compilescss']);
    gulp.watch('index.html',['copyindex']);
    gulp.watch('font/**/*',['copyfont']);
    gulp.watch('style/css/**/*',['copycss']);
    gulp.watch('js/**/*',['copyjs']);
    gulp.watch('html/**/*',['copyhtml']);
    gulp.watch('images/**/*',['copyimg']);
});