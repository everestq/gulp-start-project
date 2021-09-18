import config from './gulp/config'

config.setEnv();

export const build = gulp.series(
  // clean,
  // gulp.parallel(
  //   scriptsBuild,
  //   pugBuild,
  //   stylesBuild,
  //   assetsBuild,
  //   imagesBuild,
  //   spritesBuild,
  // ),
);

export const watch = gulp.series(
  // build,
  // server,
  // gulp.parallel(
  //   scriptsWatch,
  //   pugWatch,
  //   stylesWatch,
  //   assetsWatch,
  //   imagesWatch,
  //   spritesWatch,
  // ),
);

exports.stylesWatch = stylesWatch;
