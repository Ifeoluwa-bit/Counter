const counter = document.querySelector('#counter');
const incrementBtn = document.querySelector('.btn1');
const reset = document.querySelector('.btn2');
const decrementBtn = document.querySelector('.btn3');
let counterValue = 0;

incrementBtn.addEventListener('click', () => {
    counterValue++;
    counter.innerHTML = counterValue;
});
decrementBtn.addEventListener('click', () =>{
    counterValue--;
    counter.innerHTML = counterValue;
});
reset.addEventListener('click', () =>{
    counterValue = 0;
    counter.innerHTML = counterValue;
});