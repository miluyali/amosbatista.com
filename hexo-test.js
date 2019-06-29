var Hexo = require('hexo');

var textFolders = process.cwd() + "/texts"
var hexo = new Hexo(textFolders, {
  debug: true
});

hexo.init().then(function(){
  console.log("initialized")

  console.log(hexo.locals.get('posts'))

});