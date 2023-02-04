const $divs = document.querySelectorAll('div');

$divs.forEach(
    $div => $div.addEventListener('click', logClass,)
);

function logClass(e){ // add e param.
    e.stopPropagation();
    this.style.background="#123456";
    console.log(this.classList.value);
    
}
