var animationContainerElement = document.getElementById('animation-container');
var animationElement          = document.getElementById('animation');

/* Add dummy element */
for (var i = 0; i < 100; i++) {
  var textElement = document.createElement('p');
  var text = document.createTextNode('Sample text');
  textElement.appendChild(text);

  animationElement.appendChild(textElement);
}

/* get height */
var animationContainerElementHeight = animationContainerElement.offsetHeight;
var animationElementHeight          = animationElement.offsetHeight;

/* start animation */
animationElement.style.top = animationContainerElementHeight + 'px';
var moving = setInterval(move, 10);

function move() {
  var offsetTop = animationElement.offsetTop;
  if (offsetTop === -animationElementHeight) {
    console.log('end move');
    clearInterval(moving);
  } else {
    animationElement.style.top = (offsetTop-1) + 'px';
  }
}
