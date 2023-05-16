music_1="";
music_2= "";

function preload(){
    loadSound("music.mp3");
    loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(500,200);

    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,400);
}