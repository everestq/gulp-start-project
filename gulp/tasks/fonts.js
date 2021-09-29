import gulp from 'gulp'
import ttf2woff from 'gulp-ttf2woff'
import ttf2woff2 from 'gulp-ttf2woff2'

const fs = require('fs')

const cb = () => { }

const srcFonts = './src/scss/_fonts.scss'
const appFonts = './build/fonts/'

export const fonts = () => {
  gulp.src('./src/assets/fonts/**.ttf')
    .pipe(ttf2woff())
    .pipe(gulp.dest('./build/fonts/'))
  return gulp.src('./src/assets/fonts/**.ttf')
    .pipe(ttf2woff2())
    .pipe(gulp.dest('./build/fonts/'))
}

export const fontsStyle = (done) => {
  fs.writeFile(srcFonts, '', cb)
  fs.readdir(appFonts, (err, items) => {
    if (items) {
      let cFontname
      for (let i = 0; i < items.length; i += 1) {
        let fontname = items[i].split('.')
        /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
        fontname = fontname[0]
        if (cFontname !== fontname) {
          fs.appendFile(srcFonts, `@include font-face("${fontname}", "${fontname}", 400);\r\n`, cb)
        }
        cFontname = fontname
      }
    }
  })

  done()
}
