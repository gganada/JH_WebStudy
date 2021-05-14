

var letsparty = 1;
var cat = document.getElementById("box2");

var xx = cat.clientTop;
var yy = cat.style.top - 'px';

var xxx;
var yyy;

var tog = 0;
var menu;

function pett() {
    var jumpCat = document.getElementById("box");
    jumpCat.style.webkitTransform = 'scale(1,' + (900 - event.clientY) * 0.0015 + ')';
    var rotCat = document.getElementById('box3');
    if (rotCat.offsetLeft > event.clientX) {
        rotCat.style.webkitTransform = 'scaleX(-1)';
    }
    else {
        rotCat.style.webkitTransform = 'scaleX(1)';
    }

    if (rotCat.offsetTop > event.clientY) {

        rotCat.style.webkitTransform = 'rotate(' + (-1)*Math.acos((event.clientX - rotCat.offsetLeft) / (Math.sqrt(Math.pow(event.clientX - rotCat.offsetLeft, 2) + Math.pow(event.clientY - rotCat.offsetTop, 2)))) + 'rad)';
    } else {
        rotCat.style.webkitTransform = 'rotate(' + Math.acos((event.clientX - rotCat.offsetLeft) / (Math.sqrt(Math.pow(event.clientX - rotCat.offsetLeft, 2) + Math.pow(event.clientY - rotCat.offsetTop, 2)))) + 'rad)';
    }

    
}

function test() {
    document.querySelector('body').style.backgroundColor = '#' + Math.round(Math.random() * 0xFFFFFF).toString(16);
    document.querySelector('body').style.backgroundSize = Math.floor((Math.random() + 0.1) * 300) + 'px';
    setTimeout(function () {
        if (letsparty) {
            test();
        }
    }, 5);
}

function action() {


    xx = cat.offsetLeft;
    

    xxx = event.clientX;
    yyy = event.clientY;
    event.offsetLeft;
    var i;

  
   
   
    if (xx < xxx) {
        cat.style.webkitTransform = 'scale(1,1)';
        cat.style.left = xxx + 'px';
        cat.style.top = yyy + 'px';
        
    }
    else {
        cat.style.webkitTransform = 'scale(-1,1)';
        cat.style.left = xxx +  'px';
        cat.style.top = yyy + 'px';
        
    }

  



}

function toto() {
    if (!tog) {
        document.getElementById("menu").style.backgroundColor = 'dimgrey';
        tog = 1;
    }
    else {
        document.getElementById("menu").style.backgroundColor = 'aliceblue';
        tog = 0;
    }

}
