/*global Xiuli*/
const xiuli = new Xiuli('xiuli', Xiuli.initializers.spiralSteps);

document.getElementById('btn1').onclick = ev => xiuli.goto('section1', ev);
document.getElementById('btn2').onclick = ev => xiuli.goto('section2', ev);
document.getElementById('btn3').onclick = ev => xiuli.goto('section3', ev);
document.getElementById('btn4').onclick = ev => xiuli.goto('section4', ev);

const indexes = {
  slides1: 0,
  slides2: 0,
  typewriterline:0
};
slides1();
setTimeout(slides2, 2000);
typewriter();
function slides1() {
  animate('slides1');
  setTimeout(slides1, 4000);
}

function slides2() {
  animate('slides2');
  setTimeout(slides2, 4000);
}

function typewriter() {
  animate('typewriterline');
  setTimeout(typewriter, 7000);
}

function animate(csClass) {
  var x = document.getElementsByClassName(csClass);
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  let slideIndex = indexes[csClass] + 1;
  if (slideIndex > x.length) { slideIndex = 1; }
  x[slideIndex - 1].style.display = 'block';
  indexes[csClass] = slideIndex;
}