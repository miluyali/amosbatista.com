var Hexo = require('hexo');

var textFolders = process.cwd() + "/texts"
var hexo = new Hexo(textFolders, {
  debug: true,
  config: "_texts_config.yml"
});

hexo.init().then(loadAllContentWithBox);

function test(){
  console.log("Text component generalizated")
  console.log(hexo.locals.get('posts'))
  return hexo.exit();
}

function instantiatePost(){
  var postData = {
    title: "firstPost",
    slug: "firstPost",
  }
  var mustReplaceFile = true
  hexo.post.create(postData, mustReplaceFile);

  console.log(hexo.locals.get('posts')) 
  return hexo.exit().then(function(content){
    console.log("I did", content)
  });
}

function loadAllContent(){
  hexo.load().then(function(content){
    console.log("That is all content", content)
  })
  return hexo.exit();
}


function renderFromRender(){
  hexo.render.render({path:'texts/source/_posts/firstPost.md', engine: 'swig'}).then(function(content){
    console.log("I created this", content)
  });
  return hexo.exit();
}

function renderFromPost(){
  hexo.post.render("texts/source/_posts/firstPost.md").then(function(content){
    console.log("I created this", content)
  });
  return hexo.exit();
}

function renderTest(){
  hexo.render.render({text: 'example', engine: 'swig'}).then(function(result){
    console.log("I created this", result)
  });
}


function loadAllContentWithBox(){
  box.process().then(function(){
    box.addProcessor('posts/:id', function(file){
      console.log("I created this", file)
    });
  });
  return hexo.exit();
}
