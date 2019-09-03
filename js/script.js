const result = document.querySelector('.cal-display');
const clear = document.querySelector('#clear')

const buttons = document.querySelectorAll(".num, .op")
console.log(buttons)
Array.from(buttons).forEach((button) =>{
button.addEventListener('click', function(event) {
result.innerHTML += button.value
    console.log('clicked me')
});
}) ;

clear.addEventListener('click', function(){
    result.innerHTML = ''
})


