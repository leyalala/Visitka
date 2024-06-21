AOS.init();

function dark_mode(){
    let is_dark = localStorage.getItem('dmode')
    if (is_dark == 'true'){
        is_dark=false
    }else{
        is_dark=true
    }
    localStorage.setItem('dmode', is_dark)
    document.querySelector('.photo').classList.toggle('main-2', is_dark)
    document.querySelectorAll('.annotaciya').forEach(element => {
        element.classList.toggle('main-1',is_dark)
    });
    document.querySelector('body').classList.toggle('main-1', is_dark)
}
let button = document.querySelector('.modee')

button.addEventListener('click', dark_mode)






