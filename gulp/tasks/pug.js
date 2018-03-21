'use strict';

module.exports = function() {
  var nav = './data/nav.json';
  var tabs = './data/tabs.json';
  var hero = './data/hero.json';
  var coast = './data/coastCleaning.json';
  var opinions = './data/opinions.json';
  var slider = './data/slider.json';
  var whyWe = './data/whyWe.json';
  var questions = './data/questions.json';

  $.gulp.task('pug', function() {
    return $.gulp.src(['./source/template/**/*.pug', '!./source/template/**/_*.pug'])
      .pipe($.gp.pug({ 
        locals: {
           nav: JSON.parse($.fs.readFileSync(nav, 'utf-8')),
           tabs: JSON.parse($.fs.readFileSync(tabs, 'utf-8')),
           hero: JSON.parse($.fs.readFileSync(hero, 'utf-8')),
           coast: JSON.parse($.fs.readFileSync(coast, 'utf-8')),
           opinions: JSON.parse($.fs.readFileSync(opinions, 'utf-8')),
           slider: JSON.parse($.fs.readFileSync(slider, 'utf-8')),
           whyWe: JSON.parse($.fs.readFileSync(whyWe, 'utf-8')),
           questions: JSON.parse($.fs.readFileSync(questions, 'utf-8')),
          },
        // locals: YOUR_LOCALS,
        pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
