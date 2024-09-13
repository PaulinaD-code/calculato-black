let calculation = localStorage.getItem('calculation') || '';
const button_1 = document.querySelector('.js-button-1');
const button_2 = document.querySelector('.js-button-2');
const button_3 = document.querySelector('.js-button-3');
const sign_plus = document.querySelector('.js-sign-plus');
const button_4 = document.querySelector('.js-button-4');
const button_5 = document.querySelector('.js-button-5');
const button_6 = document.querySelector('.js-button-6');
const sign_minus = document.querySelector('.js-sign-minus');
const button_7 = document.querySelector('.js-button-7');
const button_8 = document.querySelector('.js-button-8');
const button_9 = document.querySelector('.js-button-9');
const sign_multiplication = document.querySelector('.js-sign-multiplication');
const button_0 = document.querySelector('.js-button-0');
const sign_dot = document.querySelector('.js-sign-dot');
const sign_divine = document.querySelector('.js-sign-divine');
const sign_equal = document.querySelector('.js-sign-equal');
const clear_btn = document.querySelector('.js-clear-btn');

      // Display the calculation when the page first loads.
      displayCalculation();

      function updateCalculation(value) {
        calculation += value;

        // Display the calculation on the page
        // instead of console.log
        displayCalculation();

        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        document.querySelector('.js-calculation')
          .innerHTML = calculation;
      }

      button_1.addEventListener('click', ()=> updateCalculation('1'));
      button_2.addEventListener('click', ()=> updateCalculation('2'));
      button_3.addEventListener('click', ()=> updateCalculation('3'));
      sign_plus.addEventListener('click', ()=> updateCalculation(' + '));
      button_4.addEventListener('click', ()=> updateCalculation('4'));      
      button_5.addEventListener('click', ()=> updateCalculation('5'));
      button_6.addEventListener('click', ()=> updateCalculation('6'));
      sign_minus.addEventListener('click', ()=> updateCalculation(' - '));
      button_7.addEventListener('click', ()=> updateCalculation('7'));     
      button_8.addEventListener('click', ()=> updateCalculation('8'));      
      button_9.addEventListener('click', ()=> updateCalculation('9'));
      sign_multiplication.addEventListener('click', ()=> updateCalculation(' * '));
      button_0.addEventListener('click', ()=> updateCalculation('0'));
      sign_dot.addEventListener('click', ()=> updateCalculation('.'));
      sign_divine.addEventListener('click', ()=> updateCalculation(' / '));

      sign_equal.addEventListener('click', ()=>{
        calculation = eval(calculation);
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      })

      clear_btn.addEventListener('click', ()=>{
        calculation = '';
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      })
      
      