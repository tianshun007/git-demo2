var gulp = require('gulp');
// 引入常用组件
var htmlmin = require('gulp-htmlmin');

// 压缩html
gulp.task('html',function(){
	gulp.src('src/**/*.html')
	.pipe(htmlmin({
		removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
	}))
	.pipe(gulp.dest('dist/'))
});
// 编译less，压缩编译后的css文件 并仿到目标目录
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
gulp.task('less',function(){
	gulp.src('src/less/**/*.less')
	.pipe(less())
	.pipe(cssmin())
	.pipe(gulp.dest('dist/css'))
});