

var letsparty = 0;
var cat = document.getElementById("box2");

var xx = cat.clientTop;
var yy = cat.style.top - 'px';

var xxx;
var yyy;

var tog = 0;
var menu;

var rot = 0;
var scl;

var partyRot = 0.001;

var jumpCat = document.getElementById("box");
var rotCat = document.getElementById('box3');

var lef = 700 + 271 / 2;
var topp = rotCat.offsetTop;

var currentColorMode= 'white';


function pett() {
    jumpCat.style.webkitTransform = 'scale(1,' + (900 - event.clientY) * 0.0015 + ')';



    if (!letsparty) {

    if (lef > event.clientX) {
        scl = -1;   
    }
    else {
        scl = 1;

        }



        rot = Math.acos((event.clientX - lef) / (Math.sqrt(Math.pow(event.clientX - lef, 2) + Math.pow(event.clientY - topp, 2))));

    if (rotCat.offsetTop > event.clientY) {
        rot *= -1;
       
    }


    }

    RotUpdate();

}

function RotUpdate() {
    rotCat.style.webkitTransform = 'rotate(' + rot + 'rad) scaleY(' + scl + ')';
}

function randColor() {
    
    document.querySelector('body').style.backgroundColor = '#' + Math.round(Math.random() * 0xFFFFFF).toString(16);
    document.querySelector('body').style.backgroundSize = Math.floor((Math.random() + 0.1) * 300) + 'px';
    partyRot = partyRot - 0.05;
    rot = partyRot;
    RotUpdate();


    setTimeout(function () {
        if (letsparty) {
            randColor();
        }
    }, 5);
}

function moveCat() {


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

function menuFix() {
    if (!tog) {
        tog = 1;
    }
    else {
        tog = 0;
    }
    menuUpdate();

}

function menuUpdate() {
    if (!tog) {
        if (currentColorMode == 'black') document.getElementById("menu").style.backgroundColor = 'black';
        else document.getElementById("menu").style.backgroundColor = 'white';
    }
    else {
        document.getElementById("menu").style.backgroundColor = 'dimgrey';
    }

    if (currentColorMode == 'white') {
        document.getElementById('menuIcon').style.filter = 'invert(0)';
    }
    else {
        document.getElementById('menuIcon').style.filter = 'invert(1)';
    }
}

function menuPopup(){
    document.getElementById('MainList').style.display = 'grid';
    document.getElementById('MainList').style.webkitTransform = 'scale(1,1)';
    document.getElementById('sodyd').style.paddingLeft = '230px';
}

function darkMode() {
    if (currentColorMode = 'white') {
        var all = document.getElementsByClassName('item');
        for (var i = 0; i < all.length; i++) {
            all[i].style.backgroundColor = '#1f2023';
        }
        document.getElementById('sodyd').style.color = 'white';
        document.getElementById('MainList').style.borderRightColor = 'white';
        currentColorMode = 'black';
    }
    menuUpdate();
   
}

function dayMode() {
    if (currentColorMode = 'black') {
        var all = document.getElementsByClassName('item');
        for (var i = 0; i < all.length; i++) {
            all[i].style.backgroundColor = 'white';
        }
        document.getElementById('sodyd').style.color = 'black';
        document.getElementById('MainList').style.borderRightColor = 'black';
        document.getElementById
        currentColorMode = 'white';
    }
    menuUpdate();
}

function partyTime() {
    if (letsparty) {
        letsparty = 0;
        document.getElementById('box').style.animationDuration = '2s';
        if (currentColorMode == 'black') {
            document.getElementById('sodyd').style.backgroundColor = 'rgba(31,32,35,1)';
        }
        else if(currentColorMode =='white'){
            document.getElementById('sodyd').style.backgroundColor = 'rgba(255,255,255,1)';
        }
        document.getElementById('partytime').value = 'PaRtYtImE';

    }
    else {
        document.getElementById('partytime').value = 'StopParty';
        letsparty = 1;
        document.getElementById('box').style.animationDuration = '0.3s';
        document.getElementById('sodyd').style.backgroundColor = 'rgba(0,0,0,0)';
       
        randColor();
        

    }
    menuUpdate();
}

function togg(){
        
    if (tog ==0) {
        document.getElementById('MainList').style.webkitTransform = 'scale(0,1)';
        document.getElementById('sodyd').style.paddingLeft = '30px';
    }
}