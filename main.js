music1="";
music2="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

song1_status = "";
song2_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

function setup()
{
    canvas=createCanvas(550,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist's X position =" + leftWristX + " and Y  is " + leftWristY);


        /*right wrist*/

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x is " + rightWristX + " and right wrist y is " + rightWristY);
    }
}


function info()
{
       window.alert("Bring Left hand wrist to play Peter pan and  Right hand wrist to play Harry potter theme");                                                           
                                                        
}

function preload()
{
music1 = loadSound("music.mp3");
music2 = loadSound("music2.mp3");
}
function draw() {
	image(video, 0, 0, 600, 500);
	
	song1_status = song1.isPlaying();
	song2_status = song2.isPlaying();

	fill("#FF0000");
	stroke("#FF0000");
}
if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

			song2.stop();

		if(song1_status == false)
		{
			music1.play();
			document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
		}
	}

function modelLoaded()
{
    console.log("Model Loaded");
}