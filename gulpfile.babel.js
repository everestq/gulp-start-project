import gulp from 'gulp'
import clean from './gulp/tasks/clean'
import server from './gulp/tasks/server'
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts'
// import { pugBuild, pugWatch } from './gulp/tasks/pug'
import { resourcesBuild, resourcesWatch } from './gulp/tasks/assets'
import { imagesBuild, imagesWatch } from './gulp/tasks/images'
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites'
import { paniniBuild, paniniWatch } from './gulp/tasks/html'
import { fonts, fontsStyle } from './gulp/tasks/fonts'
import { deployBuild } from './gulp/tasks/deploy'
import config from './gulp/config'

import { stylesBuild, stylesWatch } from './gulp/tasks/styles'

config.setEnv()

export const build = gulp.series(
  clean,
  fonts,
  gulp.parallel(
    scriptsBuild,
    // pugBuild,
    stylesBuild,
    resourcesBuild,
    imagesBuild,
    spritesBuild,
    paniniBuild,
  ),
)

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    scriptsWatch,
    // pugWatch,
    stylesWatch,
    resourcesWatch,
    imagesWatch,
    spritesWatch,
    paniniWatch,
  ),
)

export const font = gulp.series(
  fonts,
  fontsStyle,
)

export const deploy = gulp.series(deployBuild)
