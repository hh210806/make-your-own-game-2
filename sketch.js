
var containmentzone, containmentImg;
var Patient,patientImg;
var background,backgroundImg;
var firstaid,firstaidImg;
var kadha,kadhaImg;


function preload()
{



	kadhaImg = loadImage("download 2.png");
firstaidImg = loadImage("download.png");

backgroundImg = loadImage("road2.png");
patientImg = loadImage("infected person.png");
	containmentImg = loadImage("containment zone.png");
}

function setup() {
	createCanvas(600, 600);
background = createSprite(300,300);
background.addImage(backgroundImg);
background.scale = 0.7;

  
}


function draw() {

containmentZone();
patient();
firstaidkit();
Kadha();


	background.velocityY = 3;
if (background.y > 400){


	background.y = 300;
  }
  
 


drawSprites();

}
function containmentZone (){
	if (frameCount % 400 === 0) {
		containmentzone = createSprite(random(100, 500), 0, 100, 100);
		containmentzone.addImage("conatinment",containmentImg);
		containmentzone.velocityY = 6;
		containmentzone.scale = random(0.2,0.7);
	  lifetime = 700;
	  
	 
	}
}
function patient(){
	if (frameCount % 100 === 0) {
		
		
		Patient = createSprite(random(100, 500), 0, 100, 100);
	
		Patient.addImage("patient",patientImg);
		Patient.velocityY = 6;
		Patient.scale = 0.2;
lifetime = 700;
	  
	  
	 
	}
}

function firstaidkit(){
	if (frameCount % 600 === 0) {
		firstaid = createSprite(random(100, 500), 0, 100, 100);
		firstaid.addImage("firstaid",firstaidImg);
		firstaid.velocityY = 6;
		firstaid.scale = 0.2;
	  lifetime = 700;
	  
	 
	}
}

function Kadha(){
	if (frameCount % 300 === 0) {
		kadha = createSprite(random(100, 500), 0, 100, 100);
		kadha.addImage("kadha",kadhaImg);
		kadha.velocityY = 6;
		kadha.scale = 0.5;
		lifetime = 700
	  
	  
	 
	}
}
