import gulp from 'gulp'
import gutil from 'gulp-util'
import ftp from 'vinyl-ftp'

const deploy = () => {
  const connect = ftp.create({
    host: 'h95364ov.beget.tech',
    user: 'h95364ov',
    password: 'Cc774711',
    parallel: 10,
    log: gutil.log,
  })

  const globs = [
    'build/**',
  ]

  return gulp.src(globs, {
    base: './build',
    buffer: false,
  })
    .pipe(connect.newer(''))
    .pipe(connect.dest('/public_html/'))
}

/* eslint-disable import/prefer-default-export */
export const deployBuild = deploy;
