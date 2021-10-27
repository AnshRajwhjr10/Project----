noseX = 0;
noseY = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses );
}
function draw()
    {
     background('#0ff2bd')
      fill('#F90093');
      stroke('#F90093')
    }

function modelLoaded()
{
    console.log('PoseNet is Intialized!');

}    

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);
    }
}