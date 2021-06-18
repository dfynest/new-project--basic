const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const wait = require("gulp-wait");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

// Sass Task
function scssTask() {
  return (
    src(["src/scss/main.scss"], {
      sourcemaps: true,
    })
      .pipe(wait(300))
      .pipe(sass())
      //.pipe(postcss([cssnano()]))
      .pipe(rename({ suffix: ".min" }))
      .pipe(dest("public/css/", { sourcemaps: "." }))
  );
}

// JavaScript Task
function jsTask() {
  return src("src/js/scripts.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("public/js/", { sourcemaps: "." }));
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    //logLevel: 'debug',
    open: "external",
    host: "git.localhost",
    proxy: "git.localhost",
    port: 8080,
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("./**/*.php", browsersyncReload);
  watch("./**/*.html", browsersyncReload);
  watch(
    ["src/**/*.scss", "src/**/*.js", "public/images/*.*"],
    series(scssTask, jsTask, browsersyncReload)
  );
}

// Default Gulp task
exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);
