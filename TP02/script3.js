
    var canvas = document.getElementById('canvas'),
        canvas1 = document.getElementById('canvas1')
        ctx = canvas.getContext('2d'),
        ctx1 = canvas1.getContext('2d'),
        video = document.getElementById('video'),
        video1 = document.getElementById('video1'),
        button = document.getElementById('myBtn');


    //     let src = cv.imread('canvas');
    //     let dst = new cv.Mat();
    //     // You can try more different parameters
        
    //     let rect1 = new cv.Rect(100,100,200,200);
    //     dst = src.roi(rect);
    //    ;
    //     cv.imshow('canvas1', dst);
    //     src.delete();
    //     dst.delete();    

    //Play and Pause video
    button.addEventListener("click", function(){
        if(video.paused,video1.paused){
            video.play();
            video1.play();
           
            button.innerHTML = "Pause";
        }else{
            video.pause();
            video1.pause();
            button.innerHTML = "Play";
        }
    })
    //Access video
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then((stream)=> {
        video.srcObject = stream;
        video1.srcObject = stream;
    }).catch((err)=> {
       console.log('navigator.mediaDevices.getUserMedia error: ',err.message,err.name);
    });
    window.onload=(function(){
        var leftX = 25;
        var topY = 25;
        var width=40;
        var height=25;
        ctx1.beginPath();
        ctx1.rect(leftX, topY, canvas1.width, canvas1.height);
        ctx1.stroke();
    })
    //Loop drawing video
    (function loop(){
        if(playing){
            ctx.drawImage(video,0,0,canvas.Width,canvas.height);
            ctx1.drawImage(video1,0,o,canvas1.Width,canvas1.height);
            setTimeout(loop,1000/30);
        }    
    });