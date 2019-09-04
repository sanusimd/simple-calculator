const result = document.querySelector('.cal-display');
const clear = document.querySelector('#clear');
const compute = document.querySelector('.btn-equal');


const buttons = document.querySelectorAll(".num, .op")

// loop trough the buttons to access each button 
Array.from(buttons).forEach((button) =>{

// Add event listener 
button.addEventListener('click', function(event) {

// display result when click on button
result.innerHTML += button.value; 
});
}) ;

// compute value display result div
compute.addEventListener('click', function(){
    result.innerHTML = eval(result.innerHTML)
});

// clear the result 
clear.addEventListener('click', function(){
    result.innerHTML = ''
})


