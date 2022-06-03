console.log("horray!!!");

let timer;
let titleOld = document.querySelector('head title').innerHTML;

function changeTitle(icon, text){
    document.querySelector('head title').innerHTML = text;
    document.querySelector('link[rel="icon"]').setAttribute('href', icon);
}

window.onblur = () => {
    timer = setTimeout(() => {
        changeTitle('img/emoji.jpg', '😭😭Вернись пожалуйста😭😭')
    }, 3000);
}

window.onfocus = () => {
    clearTimeout(timer);
    changeTitle('img/icon.jpg', titleOld);
}

let button = document.querySelector('.buttonMedia');
let header = document.querySelector('.siteHeader');

button.addEventListener('click', function(){
    header.classList.add("siteHeader-bg");
});
