/*global Xiuli*/
const xiuli = new Xiuli('xiuli', Xiuli.initializers.spiralRotated);

document.getElementById('btn1').onclick = ev => xiuli.goto('section1', ev);
document.getElementById('btn2').onclick = ev => xiuli.goto('section2', ev);
document.getElementById('btn3').onclick = ev => xiuli.goto('section3', ev);
document.getElementById('btn4').onclick = ev => xiuli.goto('section4', ev);

let slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1; }
  x[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 4000);
}