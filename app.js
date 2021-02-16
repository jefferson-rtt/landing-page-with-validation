
const sing_in_password = document.getElementById('password');
const submit = document.getElementById('submit');

// elementos para validação
const li_lower_upper = document.querySelector('#lower-upper');
const li_numbers = document.querySelector('#numbers');
const li_special_characters = document.querySelector('#special-characters');
const li_digits = document.querySelector('#digits');


sing_in_password.addEventListener('keyup', (event) => {
    const {value} = sing_in_password;
    
    // regex
    const upperRegex = RegExp("[A-Z]");
    const lowerRegex = RegExp("[a-z]");
    var regexSpecialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var regexNumbers = /\d/g;



    // Variavéis para validação
    const isNumberValidated = value.match(regexNumbers);
    const isSpecialCharacters = value.match(regexSpecialCharacters);
    const isPasswordLength = value.length >= 8;
    const isLowerUpper = value.match(upperRegex) && value.match(lowerRegex);
    
    // validação de 8 digitos
    if (isPasswordLength) {
        li_digits.classList.add('active');
        const icon = li_digits.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle')
        icon.classList.add('fa-check')
    }else{
        li_digits.classList.remove('active');
        const icon = li_digits.getElementsByTagName('i')[0];
        icon.classList.add('fa-circle');
        icon.classList.remove('fa-check');
    }
    
    // validação de números na senha
    if (isNumberValidated) {
        li_numbers.classList.add('active');
        const icon = li_numbers.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle')
        icon.classList.add('fa-check')
    }else{
        li_numbers.classList.remove('active');
        const icon = li_numbers.getElementsByTagName('i')[0];
        icon.classList.add('fa-circle');
        icon.classList.remove('fa-check');
    }

    // validação de caracteres especiais
    if (isSpecialCharacters) {
        li_special_characters.classList.add('active');
        const icon = li_special_characters.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle')
        icon.classList.add('fa-check')
    }else{
        li_special_characters.classList.remove('active');
        const icon = li_special_characters.getElementsByTagName('i')[0];
        icon.classList.add('fa-circle');
        icon.classList.remove('fa-check');
    }

    // validação upper case 
    if (isLowerUpper) {
        li_lower_upper.classList.add('active');
        const icon = li_lower_upper.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle')
        icon.classList.add('fa-check')
    }else{
        li_lower_upper.classList.remove('active');
        const icon = li_lower_upper.getElementsByTagName('i')[0];
        icon.classList.add('fa-circle');
        icon.classList.remove('fa-check');
    }

    if(
        isNumberValidated &&
        isSpecialCharacters &&
        isPasswordLength &&
        isLowerUpper){
        submit.removeAttribute('disabled')
    }else{
        submit.setAttribute('disabled', "")
    }
});


// Mostrar e ocultar senha
const mostrarSenha = document.querySelector('#eye')
mostrarSenha.addEventListener('mousedown', function(){

    let input = document.querySelector('#password');

    if(input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text');
        const iconEye = document.querySelector('#eye');
        iconEye.classList.remove('fa-eye')
        iconEye.classList.add('fa-eye-slash')
        
    } else{
        input.setAttribute('type', 'password');
        const iconEye = document.querySelector('#eye');
        iconEye.classList.remove('fa-eye-slash')
        iconEye.classList.add('fa-eye')
    }
});

