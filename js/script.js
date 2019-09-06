const result = document.querySelector('.cal-display');
const clear = document.querySelector('#clear');
const compute = document.querySelector('.btn-equal');


const buttons = document.querySelectorAll(".num, .op")

// loop trough the buttons to access each button 
Array.from(buttons).forEach((button) =>{

// Add event listener 
button.addEventListener('click', () => {

// display result when click on button
result.value += button.value; 
});
}) ;

// compute value display in result div
compute.addEventListener('click', () =>{
    
    if(result.value.length == 0){
        return false
    }else{
        result.value = eval(result.value)
    }
    
});

// clear the result 
clear.addEventListener('click', () => {
    result.value = ''
})


