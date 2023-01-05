function preload(){
    img = loadImage('https://png.pngtree.com/thumb_back/fh260/back_pic/03/59/13/9857a3f832287ab.jpg');
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 290);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color = "";
}

function draw(){
    image(img,0 ,0 ,640,480);
    
    image(video,98,95,450,330);
    tint(tint_color);
}

function take_snapshot(){
    save('Yurii.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}
