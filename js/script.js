const result = document.querySelector('.cal-display');
const clear = document.querySelector('#clear');
const compute = document.querySelector('.btn-equal');
const decimal = document.querySelector('#decimal')
console.log(decimal)


const buttons = document.querySelectorAll(".num, .op")
let input = [];

// loop trough the buttons to access each button 
Array.from(buttons).forEach((button) =>{

// Add event listener 
button.addEventListener('click', () => {
const operators = ['+', '-', '/', '*']
// display result when click on button
console.log(input, button)
if (input[input.length-1] == '=' && !operators.includes(button.value)) {
    result.value = button.value;
} else {
    result.value += button.value;
}

input.push(button.value);
});
});
 

// compute value display in result div
compute.addEventListener('click', () =>{
    input.push('=');
    
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


