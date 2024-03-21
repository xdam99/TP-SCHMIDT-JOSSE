let inputName = document.querySelector('.form-name')
let inputPhone = document.querySelector('.phone')
let inputEmail = document.querySelector('.email')
let inputCom = document.querySelector('.com')

let form = document.querySelector('#form-contact')

// form.addEventListener('submit', (e, inputs)=>{
//     console.log('ok')
//     if(inputName.value == "") {
//         e.preventDefault()
//         inputs.style.animation = "checker 1s linear"
//         setTimeout(function () {
//             inputName.style.animation = ""
//         }, 1000)
//     } 
// })

document.getElementById('form-contact').addEventListener('submit', function(e) {
    const inputs = this.querySelectorAll('input, textarea');
    let formIsValid = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === "") {
            input.style.animation = "checker 1s linear";
            setTimeout(function() {
                input.style.animation = "";
            }, 1000);
            formIsValid = false;
        }
    });

    if (!formIsValid) {
        e.preventDefault();
    }
});