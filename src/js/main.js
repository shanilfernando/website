/*global Xiuli*/
const xiuli = new Xiuli('xiuli', Xiuli.initializers.spiralRotated);

document.getElementById('btn1').onclick = ev => xiuli.goto('section1', ev);
document.getElementById('btn2').onclick = ev => xiuli.goto('section2', ev);
document.getElementById('btn3').onclick = ev => xiuli.goto('section3', ev);
document.getElementById('btn4').onclick = ev => xiuli.goto('section4', ev);