const blocks = document.querySelectorAll('.book'); // пункт 1
blocks[1].after(blocks[0]);
blocks[5].after(blocks[2]);
blocks[3].before(blocks[4]);

const imgNew = document.getElementsByTagName('body');                       // пункт 2
imgNew[0].style.backgroundImage = "url('image/you-dont-know-js.jpg')";

const h42 = blocks[4].querySelector('h2 a');               // пункт 3
console.log(h42);
console.dir(h42);

h42.textContent = 'Книга 3. this и Прототипы Объектов';

const ad = document.querySelector('.adv');  // пункт 4
ad.remove();


const ul2 = blocks[0].getElementsByTagName('ul'); // пункт 5
const el2 = ul2[0].getElementsByTagName('li');
el2[0].after(el2[1]);
el2[1].after(el2[3]);
el2[2].after(el2[6]);
el2[3].after(el2[8]);
el2[4].after(el2[6]);
el2[5].after(el2[7]);
el2[6].after(el2[8]);
el2[7].after(el2[9]);

const ul5 = blocks[5].getElementsByTagName('ul');
console.log(ul5);
const el5 = ul5[0].getElementsByTagName('li');
console.log(el5);
el5[1].after(el5[5]);
el5[1].after(el5[9]);
el5[2].after(el5[5]);
el5[3].after(el5[6]);
el5[4].after(el5[6]);
el5[5].after(el5[7]);
el5[6].after(el5[8]);

const ul3 = blocks[2].getElementsByTagName('ul'); //пункт 6
console.log(ul3);
const el3 = ul3[0].getElementsByTagName('li');

const newEl = document.createElement('li');
newEl.textContent = "Глава 8: За пределами ES6";
el3[9].append(newEl);


