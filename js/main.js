"use strict";

let buttonAdd = document.querySelector('.plus');

/*
buttonAdd.onclick = function () {
  buttonAdd.classList.toggle('minus');

}
*/

class FoodCard {
  name;
  image;
  cost = '250gr.';
  weight = '300 ru';

  desc = 'Ролл с угрем, ролл тунцом, суши с лососем,' +
    '                суши с креветкой, суши с угрем';
  constructor(name, image) {
  this.name = name;
  this.image = image;
  }
}

let arr = [new FoodCard('Сет 2','img/set_1.jpg'),
  new FoodCard('Сет Са','img/set_2.jpg'),
  new FoodCard('Сет Ата','img/set_3.jpg'),
  new FoodCard('Сет rgergа','img/set_2.jpg'),
  new FoodCard('Сет Сererа','img/set_2.jpg')];


for(let elem of arr){
  let card = document.createElement('li');
  let h3 = document.createElement('h3');
  let button = document.createElement('button');
  let div = document.createElement('div');
  let span_w = document.createElement('span');
  let img = document.createElement('img');
  let span_c = document.createElement('span');
  let p = document.createElement('p');
  let main_img = document.createElement('img');
  card.classList.add('food-item');
  h3.textContent = elem.name;
  card.append(h3);
  button.classList.add('plus');
  card.append(button);
  div.classList.add('gradient');
  card.append(div);
  span_w.classList.add('weight');
  img.setAttribute('src', 'icons/weight-icon.svg');
  span_w.textContent = elem.weight;
  span_w.append(img);
  card.append(span_w);
  span_c.classList.add('cost');
  span_c.textContent = elem.cost;
  p.classList.add('describe');
  p.textContent = elem.desc;
  main_img.setAttribute('src', elem.image);
  main_img.setAttribute('alt', 'food');
  card.append(p);
  card.append(main_img);
  document.querySelector('#sets').append(card);

  console.log(card);

}

let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.scrollY > 200 && upButton != undefined) {
    upButton.classList.add('show');
    upButton.classList.remove('hidden');
  } else {
    upButton.classList.add('hidden');
    upButton.classList.remove('show');

  }
}

upButton.onclick= function () {
  window.scrollTo(0,0);
}

/* ---------------------NAVIGATOR ICONS------------------
let typeFoodList = [
  'sets', 'salads', 'sushi', 'lapsha', 'soups', 'drinks',
]
let items = {};
let navTypeFoodItem;
let aId;
let img;
for(let i = 0; i < typeFoodList.length; i++){
  navTypeFoodItem = document.createElement('li');
  aId = document.createElement('a');
  img = document.createElement('img');
  navTypeFoodItem.classList.add('nav-type_food-item');
  console.log(typeFoodList[i]);
  aId.setAttribute('href', `#${typeFoodList[i]}`);
  img.setAttribute('src',`/icons/${typeFoodList[i]}.svg`);
  aId.append(img);
  navTypeFoodItem.append(aId);
  document.querySelector('.nav-type_food-list').append(navTypeFoodItem);
}*/



