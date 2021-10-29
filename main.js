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
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}