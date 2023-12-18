var square = document.querySelector('.square');

document.addEventListener('scroll', function(){
    square.style.transform = 'rotate(' + (window.scrollY) + 'deg)';
}); 

//window.scrolY-yuxarda olanda scrul 0 dir, asagi dusdukce artir