function setup (){
    canvas = createCanvas(550, 500);
    canvas.position(560, 70);
    
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("teal")
}

function modelLoaded(){
    console.log('PoseNet is initialized!')
}

function gotPoses(result)
{
    if(result.length>0){
    console.log(result);
}}

