objectDetector = "";

img = "";
objects = [];
status = "";

function preload(){
img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
 status = true;
 objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function setup() {
canvas = createCanvas(380, 380);
canvas.center();
video = createCapture(VIDEO);
video.size(380,380);
video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementsById("status").innerHTML = "Status : Detecting Objects";
}

    function draw() 
{
    image(video, 0, 0, 380, 380);

if(status != "") {
    r = random(255);
    g = random(255);
    b = random(255);
objectDetector.detect(video, gotResult);
 for (i = 0; i < objects.length; i++) 
 {
    document.getElementById("status").innerHTML = "Status : Object Detected";
    document.getElementById("number_of_objects").innerHTML = "Numvber of objects detected are : "+ objects.length;
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke(r,g,b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
 }
 if(objects[i].label == "person"){
    document.getElementById("number_of_objects").innerHTML = "Baby Found";
    console.log("play");
    song.play();
 }
 else {
    document.getElementById("number_of_objects").innerHTML = "Baby Not Found";
     console.log("play"); 
     song.play();
 }

if(objects.length == 0) {
    document.getElementById("number_of_objects").innerHTML = "Baby Not Found";
    console.log("play"); 
    song.play();
}
}
}


