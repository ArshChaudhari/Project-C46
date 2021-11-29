
var butterfly, butterflyA;
var goodfish, goodfishA;

var powerup, powerupA;
var powerpic, powerpicI;
var coin, coinI;

var moth, mothA;
var evilfish, evilfishA;
var redskull, redskullI;
var bomb, bombI;
var blast, blastI;

var trophy, trophyI;
var gun, bullet;
var straightgun, straightgunI;

var start, startI;
var gameover, gameoverI;
var restart, restartI;

var backgroundsprite, backgroundI;
var edges;

var Start = 1 ;
var Play = 2;
var Win = 3;
var Lose = 0;
var gamestate = 1;

var bombsound;    
var collectsound; 
var obstaclesound;
var powerupsound;  

var score = 0;
var life = 5;
 
var butterflygroup, goodfishgroup;
var mothgroup, bombgroup, redskullgroup, evilfishgroup;
var coingroup, powerupgroup;


function preload(){
 backgroundI = loadImage("./others/scifibg.png");
 straightgunI = loadImage("./others/gun.png");

 butterflyA = loadAnimation("./collectibles/butterfly1.1.png","./collectibles/butterfly1.2.png");
 goodfishA = loadAnimation("./collectibles/goodfish1.1.png","./collectibles/goodfish1.2.png");

 mothA = loadAnimation("./obstacles/evilmoth1.1.png","./obstacles/evilmoth1.2.png");
 evilfishA = loadAnimation("./obstacles/evilfish1.1.png","./obstacles/evilfish1.2.png");
 redskullI = loadImage("./obstacles/redskull.png");
 bombI = loadImage("./obstacles/bomb2.png");
 blastI = loadImage("./obstacles/blast2.png");

 coinI = loadImage("./collectibles/coin1.png");
 powerupA = loadAnimation("./collectibles/powerup1.1.png","./collectibles/powerup1.2.png");
 powerpicI = loadImage("./collectibles/power.png");
 trophyI = loadImage("./others/trophy.png");

 startI = loadImage("./others/start.png");
 gameoverI = loadImage("./others/gameover.png");
 restartI = loadImage("./others/reset.png");

 collectsound = loadSound("./sounds/collectsound.wav");
 obstaclesound = loadSound("./sounds/obstaclesound.mp3");
 bombsound = loadSound("./sounds/bombsound.mp3");
 powerupsound = loadSound("./sounds/powerupsound.mp3");
}

function setup() {
 createCanvas(600,500);
 
 backgroundsprite = createSprite(width/2,height/2);
 backgroundsprite.addImage(backgroundI);
 backgroundsprite.scale = 1.5;
 
 gun = new Gun(width/2, height/2 ,40, 40);
 
 butterflygroup = new Group();
 goodfishgroup = new Group();
 
 mothgroup = new Group();
 bombgroup = new Group();
 redskullgroup = new Group();
 evilfishgroup = new Group();
 
 coingroup = new Group();
 powerupgroup = new Group();

 start = createSprite(300,450);
 start.addImage(startI);
 
 restart = createSprite(300,350);
 restart.addImage(restartI);
 
 straightgun = createSprite(315,355);
 straightgun.addImage(straightgunI);
 straightgun.scale = 0.15;

 restart.visible = false;
 restart.scale = 0.1;

 gameover = createSprite(300,200);
 gameover.addImage(gameoverI);
 gameover.scale = 0.7;
 gameover.visible = false;
}

function draw() {
  background("white");
  
  drawSprites();

 if(gamestate == 1){  
  start.visible = true;
   
  if(mousePressedOver(start)){
    gamestate = 2
    console.log("Gamestate is now Play, hence canvas is currently empty");
  }

   fill("black");
   textSize(35);
   text("Sniper Shot", width/2 - 80, 50);

   fill("maroon");
   textSize(20);
   text("Welcome! In this game you have to shoot the good collectibles - butterflies and clownfishes and try to achieve 50 points. Beware of the bombs, evilfishes, redskulls and moths! You have just 5 lives. Try to collect as many coins and powerups as possible. You can change the angle of your gun using your left and right keys. Press space to shoot. Click on start to play the game. Later you can click on restart to play it again. Enjoy the game!",70,78,500,300); 
 }

 if(gamestate == 2){
  start.visible = false;
  straightgun.visible = false;

  edges = createEdgeSprites();
 }

}
