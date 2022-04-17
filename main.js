noseX=0;
noseY=0;
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
}

function draw() {
	game();
}
function modelLoaded(){
	console.log("model is loaded");
}
function gotPoses(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log("nosex="+noseX+"nosey="+noseY);
	}
}





