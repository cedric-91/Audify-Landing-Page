"use strict";
var gulp = require("gulp"),
  sass = require("gulp-sass"),
  uglify = require("gulp-uglify"),
  pump = require("pump");


/** Sass Comipler ***/
gulp.task("sass", function() {
  return gulp.src("assets/sass/**/*.sass")
  .pipe(sass({outputStyle:'compressed'}).on("error", sass.logError))
  .pipe(gulp.dest("assets/css/"));
});

/*** File Compress ***/
gulp.task("compress", function (cb) {
  pump([
      gulp.src("assets/js/main.js"),
      uglify(),
      gulp.dest("assets/js/min/")
    ],
    cb
  );
});

/*** Watch Sass Changes ***/
gulp.task("watch", function() {
  gulp.watch("assets/sass/**/*.sass", ["sass"]);
  gulp.watch("assets/js/main.js", ["compress"]);
});


gulp.task("default", ["watch", "compress"]);
