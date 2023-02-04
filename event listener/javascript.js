var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

// event handler
/*

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

*/

//event Listener


btn.addEventListener('click', ()=>{
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
    console.log(e);   
    
});
