objects = [];
status = ""

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380)
    video.hide()
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById('object_name');
    variable_name_holds_webcamLiveView.stop();
    objectDetector.detect(gotResult);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function draw(){
    image(video, 0, 0, 480, 380);
    if (status != "")
    {
        objectDetector.detect(video, gotResults);
        for (i = 0; i < objects.length; i++) {
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "")
        }
    }
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results
}
