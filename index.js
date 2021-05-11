var letsparty = 1;
var cat = document.getElementById("box2");

var xx = cat.clientTop;
var yy = cat.style.top - 'px';

var xxx;
var yyy;

var tog = 0;
var menu;



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


    xx = cat.clientLeft;
    yy = cat.clientTop;

    xxx = event.clientX;
    yyy = event.clientY;

    var i;
  
    cat.style.left = xxx + 'px';
    cat.style.top = yyy + 'px';
    cat.style.rotate = 30;



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