song = "";

function preload()
{
    song = loadSound("https://dhiaan.github.io/song/Bing%20Bing%20Boo(Rashmeet%20Kaur,%20Kisna,%20Yashraj%20Mukhate)(KoshalWorld.Com).mp3")
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modeloaded);
}

function modeloaded() {
    console.log('poseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

   if(scoreLeftWrist > 0.2)
   {
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "VOLUME = " + volume;
    song.setvolume(volume);
   }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristsX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}

