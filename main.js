var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if (_url == '/') {
        _url = '/onon.html';
        console.log('ok');
    }
    if (_url == '/favicon.ico') {

        return response.writeHead(404);
    }   
    
    response.setHeader("Content-Type", 'text/html');
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function (err, deskk) {
        console.log('haha'+deskk);
   
    var templet = `
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>${queryData.id}</title>
    <!--  <link rel="stylesheet" href="StyleSheet1.css" /> -->
    <link rel="shortcut.icon" href="#" />
    <style>

        body {
            margin: 0;
        }

        h1 {
            margin: 0;
            text-align: center;
          
            
            color: dimgray;
        }
        h2{
            margin-left:2px;
            margin-top:10px
        }

        a {
        
            text-decoration: none;
            color: blue;
            border-radius: 8px;
            border-style: groove;
            border-color: green;
            background-color: navajowhite;
        }

        img {
            border-radius: 10px;
            border-style: solid;
            border-color: purple;
        }

        li {
            margin-bottom: 20px;
        }

        @media(min-width:850px) {
        }

        @-webkit-keyframes momo {
            0% {
                left: 10px;
                top: 10px;
            }

            100% {
                left: 10px;
                top: 10px;
            }
        }


        @-webkit-keyframes anime {
            0% {
                left: 0px;
                bottom: 0px;
            }

            50% {
                bottom: 300px;
            }

            100% {
                left: 300px;
                bottom: 0px;

            }
        }

        #box {
            position: absolute;
            width: 271px;
            height: 168px;
            margin-left: -50px;
            background-image: url('original.gif');
            color: #fff;
            animation-name: anime;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-fill-mode: both;
            transform-origin:bottom;
            
           
        }
        #box3 {
            position: absolute;
            width: 271px;
            height: 168px;
            margin-left: -50px;
            background-image: url('original.gif');
            color: #fff;
            transform-origin:center;
        }
        @keyframes tete {
            from {
                left: -100px;
            }

            to {
                left: 100px;
            }
        }

        @-webkit-keyframes anime2 {
            0% {
            }

            50% {
            }

            100% {
                transform: scaleX(-1);
            }
        }

        #box2 {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 91px;
            height: 56px;
            margin-left: -50px;
            background-image: url('original.gif');
            background-size: 100%;
            color: #fff;
            transition: 0.5s;
            transform-origin: center;
            
            
        }

        @media(max-width:850px) {
            #MainList {
                border-bottom: double 10px yellow;
            }
        }

        p {
            margin: 0;
            padding-left: 30px;
        }

        .container1 {
            width:100vw;
            display: grid;
            grid-template-columns: 50px 150px 1fr;
            height:50px;
           
        
        }
        .container2 {
            width: 100vw;
            height:100vh;
            display: grid;
            grid-template-columns: 200px 1fr;
    
            transition: 0.5s;
        }
        .item{
            background-color:white;
        }

        div {
            margin: 0;
        }

        #MainList {
            border-right: 5px solid black;
         
          
        
            transition: 1s;
            display: flex;
            transform-origin:left;
        }

        ol {
            color: green;
            margin: 0;
            padding-top: 20px;
        }

        #sodyd {
     
           
        
        
       
            background-color: white;
          
          
            padding-top: 30px;
            transform-origin:center;
        }

        #menu {
            background-color: white;
            cursor: pointer;
            transition: 1s;
        }
    </style>

</head>
<body style="background-image:url('original.gif');background-size:100px; display:flex; flex-wrap:wrap;" onclick="action()"; onmousemove="pett()" >







    <div class="container1" id="container">


        <div id="menu" class="item" onmouseover="
    document.getElementById('MainList').style.display = 'grid';
    document.getElementById('MainList').style.webkitTransform = 'scale(1,1)';
    document.getElementById('sodyd').style.width = '84vw';

    "
             onclick="toto()" style="background-image:url('Hamburger_icon.svg');background-size: 48px 48px " ;>
            <center>
                <h2>
                    
                </h2>

            </center>

        </div>

        <div class="item" style="background-color:white; height:50px">
            <p>
                <h2>
                    <a href="index.html">
                        Hello world!
                    </a>
                </h2>
            </p>
        </div>
        <div id="title" class="item" style="background-color:white;">
            <h2>
                ${queryData.id}
            </h2>

        </div>


    </div>
    







    <div class="container2">
        <div id="MainList" class="item" style="width:200px; display:flex" onmouseenter="document.getElementById('MainList').style.display = 'none'; document.getElementById('MainList').style.display = 'grid';">
            <center>
                <ol id="list_1">
                    <li><a href="/?id=list1">1번째 리스트</a></li>
                    <li><a href="/?id=list2">2번째 리스트</a></li>
                    <li><a href="/?id=list3">3번째 리스트</a></li>

                </ol>



                <input type="button" id="butt" value="nightmode" onclick="document.querySelector('body').style.backgroundColor = 'black'; " />
                <input type="button" value="daymode" onclick="document.querySelector('body').style.backgroundColor = 'white'; document.querySelector('body').style.color = 'black'; document.querySelector('body').style.borderColor = 'black;';" />

                <input type="button" id="changer" value="nigntmode" onclick="
    if (this.value === 'daymode') {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('#changer').value = 'nightmode';

    }
    else {
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('#changer').value = 'daymode';
    }

                       " />


                <input type="button" id="sisi" value="Nyan..?" onclick="document.querySelector('body').style.backgroundSize =Math.floor((Math.random()+0.1)*300)+'px'" />
                <input type="button" id="partytime" value="PaRtYtImE!" onclick="

    if (this.value === 'StopParty') {
        letsparty = 0;
        document.getElementById('box').style.animationDuration = '2s';
        this.value = 'PaRtYtImE';

    }
    else {
        this.value = 'StopParty'
        letsparty = 1;
        document.getElementById('box').style.animationDuration = '0.3s';
        test();



    }
        " />

            </center>

        </div>













        <div id="sodyd" class="item" style="height:80vh; padding-top:30px;" onmouseenter="
    if (!tog) {

        document.getElementById('MainList').style.webkitTransform = 'scale(0,1)';

        document.getElementById('container').style.gridTemplateAreas


    }">

            <!--
        여기부터 본문입니다. -----------------------------------------------------------------
    -->


            <p>
                ${deskk}

            </p>


        </div>
            <!--
                여기까지 본문입니다. -----------------------------------------------------------------
            -->

            <div id="box3" style="left:700px; top:500px;">

            </div>


            <div id="box">
                <center>

                </center>

            </div>




        




    </div>


    <div id="box2" style="left:10px; top:10px; ">


    </div>



        <!--         스크립트 부분 입니다.           -->

            <script src="index.js">
            </script>






</body>
</html>
`;
    response.end(templet);
    })
    //response.end(queryData.id);
    //response.end(fs.readFileSync(__dirname + _url)); 
});
app.listen(8080);