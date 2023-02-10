// option-1 is to directly set event handling inside html tag..we will not use option 1 that much.

// option:2 of event handling [we will use this sometimes]
function makeGreen (){
    document.body.style.backgroundColor = 'green';
}

// option:-3 of event handling
const makeBlueButton = document.getElementById('blue-button');
//    when using onclick inside js file we have be careful not to call the function inside onclick rather we just need use the function name.
   makeBlueButton.onclick = blueButton;

   function blueButton (){
    document.body.style.backgroundColor = 'blue';
   }
//    another way of option -3
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function purple (){
    document.body.style.backgroundColor = 'purple';
}

// option -4 using addEventListener
const makePink = document.getElementById('make-pink');
makePink.addEventListener('click',pink);

function pink (){
    document.body.style.backgroundColor = 'pink';
}
// option-4 another
const makeRed = document.getElementById('make-red');
       makeRed.addEventListener('click',
       function red(){
        document.body.style.backgroundColor = 'red';
       }
);

// option-4 final [we will use this sometimes]
document.getElementById('make-goldenrod').addEventListener('click',
function (){
    document.body.style.backgroundColor = 'goldenrod';
   }
);
