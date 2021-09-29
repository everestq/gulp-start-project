import gulp from 'gulp'
import plumber from 'gulp-plumber'
import panini from 'panini'
import config from '../config'

export const paniniBuild = () => {
  panini.refresh();
  return gulp.src(`${config.src.html}/*.html`)
    .pipe(plumber())
    .pipe(panini({
      root: `${config.src.root}`,
      layouts: `${config.src.html}/layouts/`,
      partials: `${config.src.html}/partials/`,
      helpers: `${config.src.html}/helpers/`,
      data: `${config.src.html}/data/`,
    }))
    .pipe(gulp.dest(config.dest.html))
};

export const paniniWatch = () => {
  gulp.watch(`${config.src.html}/**/*.html`, paniniBuild)
};
