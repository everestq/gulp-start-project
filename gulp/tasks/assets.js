import gulp from 'gulp';
import config from '../config';

const resources = (done) => {
  gulp.src(`${config.src.resources}/**/*`)
    .pipe(gulp.dest(`${config.dest.root}`))
  done();
};

export const resourcesBuild = resources;

export const resourcesWatch = () => {
  gulp.watch(`${config.src.resources}/**/*`, resources);
};
