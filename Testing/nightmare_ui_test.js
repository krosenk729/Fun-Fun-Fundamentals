const Nightmare = require("nightmare");
const expect = require("chai").expect;

describe('my github presence', function(){
  this.timeout(300000);
  it('should show six pinned repositories', (done)=>{
    Nightmare({show: true, typeInterval: 1000})
    .goto('https://github.com/krosenk729')
    .evaluate(() => {
      return document.querySelector('.pinned-repos-list').children.length;
    })
    .then(pinnedCount => {
      expect(pinnedCount).to.equal(6);
      done();
    })
    .catch(err => {
      done(err);
    });
  });

  it('should show my profile when searched for', (done)=>{
    Nightmare({show: true, typeInterval: 1000})
    .goto('https://github.com/krosenk729')
    .type('input.js-site-search-focus', 'krosenk729')
    .type('input.js-site-search-focus', '\u000d')
    .evaluate(() => {
      return document.querySelector('[href="/krosenk729/krosenk729.github.io"]');
    })
    .then(resultText => {
      expect(resultText).to.exist;
      done();
    })
    .catch(err => {
      done(err);
    });
  });
});