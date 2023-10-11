let counterValue = 0;
const counterEl = document.querySelector("#value");
counterEl.textContent = counterValue;
const btnMin = document.querySelector('button[data-action="decrement"]');
const btnMax = document.querySelector('button[data-action="increment"]');

const onClickMinus = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
};
const onClickPlus = () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
};
 
btnMin.addEventListener("click", onClickMinus);
btnMax.addEventListener("click", onClickPlus);