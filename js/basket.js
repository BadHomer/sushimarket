let swapOnList= document.getElementById('buttonList');
let swapOnForm= document.getElementById('buttonForm');
let list = document.querySelector('.buyings');
let form = document.querySelector('.form');

swapOnList.onclick = function () {
  if (swapOnList.classList.contains('unactive')) {
    list.classList.remove('hidden');
    form.classList.add('hidden');
    swapOnList.classList.remove('unactive');
    swapOnForm.classList.add('unactive');
  }
}
swapOnForm.onclick = function () {
  if(swapOnForm.classList.contains('unactive')) {
    list.classList.add('hidden');
    form.classList.remove('hidden');
    swapOnForm.classList.remove('unactive');
    swapOnList.classList.add('unactive');
  }
}
console.log(list.attributes);

let inputs = document.querySelectorAll('input');
for(let input of inputs){
  input.onchange = function () {
    console.log(input.value);
    if ((input.value !== "")) {
      input.classList.add('active');
    }else {
      input.classList.remove('active');
    }
  }
}


let payButtons = document.querySelectorAll('.payment');
for(let payButton of payButtons){
  payButton.onclick = function () {
    if (!payButton.classList.contains('active')){
      payButtons[0].classList.toggle('active');
      payButtons[1].classList.toggle('active');

    }
  }
}



let buttonBord = document.querySelector('.button-bord');
let buttonsDelivery = document.querySelectorAll('.delivery-button');

for(let buttonDelivery of buttonsDelivery){
  buttonDelivery.onclick = function () {
    console.log(buttonBord.classList);
    if(!buttonDelivery.classList.contains('active')){
      buttonsDelivery[0].classList.toggle('active');
      buttonsDelivery[1].classList.toggle('active');
      buttonBord.classList.toggle('left-side');
      buttonBord.classList.toggle('right-side');

    }
  }
}


