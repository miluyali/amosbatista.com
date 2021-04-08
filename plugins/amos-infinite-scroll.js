import Vue from 'vue'

Vue.directive('megaScroll', {
  bind: (el) => {
    const directive = {};
    directive.scrollEventTarget = getScrollEventTarget(el);

    directive.scrollListener = () => {
      
    }
    directive.scrollEventTarget.addEventListener('scroll', directive.scrollListener);
    
  }
});

var getScrollEventTarget = function getScrollEventTarget(element) {
  var currentNode = element;
  // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
    var overflowY = getComputedStyle(currentNode).overflowY;
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return window;
};