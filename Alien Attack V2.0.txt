//Create Object Class for Spaceships, missiles, and turret??
//Use methods from Frogger 
//Week 1 To-Do: (1) Give collision physics to turret/tank + health bar?? (2) Create template for Splash Scene and Game Scene. (3) Add Khan buttons for win screen and splash screen, pause button?

//Global Variables
var score = 0;
var shipSpeed = 1;
var numShips = 15;
var xSpeed = 0;
var missileSpeed = 5;
var turretHealth = 3;

//Arrays
var keysDown = [];
var missiles = [];
var ships = [];

// Spaceship Object Class
var spaceShip = function(x, y, size) {  //Spaceship Constructor Function
    this.x = x;
    this.y = y;
    this.size = size;
};

spaceShip.prototype.draw = function() {
     var spaceshipColors = [color(214, 88, 88),color(61, 100, 255),color(137, 48, 209)];

    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);

    line(this.x + 16* this.size,this.y, this.x + 20* this.size, this.y - 16* this.size);
    line(this.x - 16* this.size,this.y, this.x - 20* this.size, this.y - 16* this.size);      //Antennas 

    strokeWeight(1);
    rectMode(CENTER); 
    noStroke();
    ellipse(this.x,this.y-15* this.size,7* this.size,5* this.size);         //Top knob
 
    var colorRandomizer = round(random(0,2));

    if (colorRandomizer === 0) {fill (spaceshipColors [ 0 ] );}
    if (colorRandomizer === 1) {fill (spaceshipColors [ 1 ] );}    //fills random color
    if (colorRandomizer === 2) {fill (spaceshipColors [ 2 ] );}

    ellipse(this.x,this.y,50* this.size,30* this.size);           //Body
    stroke(0, 0, 0);
    rect(this.x,this.y,56* this.size,7* this.size,20);            //Middle strip

    var windowx = this.x-24* this.size;           //Windows X location
    noStroke();
    stroke(0, 0, 0);
    fill(255, 255, 255);

    for (var i = 0; i<9; i++)     //Creates 9 windows
        {
            rect(windowx,this.y,4* this.size,3* this.size);
            windowx = windowx +6;
        }
};

spaceShip.prototype.move = function(){
    this.y += shipSpeed;
    if(this.y > height){
        this.x = random(10, width);
        this.y = - random(20,920);
        score--;
        turretHealth--;
    }
};


//Turret Object Class
var Turret = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 50;
};

//Turret draw Method
Turret.prototype.draw = function() {
    line(this.x + -15, this.y - 50, this.x + -15, this.y + -5);
    line(this.x + 15, this.y - 50, this.x + 15, this.y + -5);
    line(this.x + -15, this.y -50, this.x + 15, this.y -50);
    fill(199, 199, 199);
    arc(this.x , this.y, this.width, this.height, 180, 360);
};

//Turret Health Draw Method
Turret.prototype.healthDraw = function() {
    fill(255, 0, 0);
    text("Turret Health : " + turretHealth, 20, 380);
    
};

//Method to move Turret direction Right
Turret.prototype.moveRight = function() {
    this.x += 4;
    this.x = constrain(this.x, 26, 375);
};

//Method to move Turret direction Left
Turret.prototype.moveLeft = function() {
    this.x -= 4;
    this.x = constrain(this.x, 26, 376);
};

//Missile Object Class
var Missile = function(x,y){
    this.x = x;
    this.y = y;
};

Missile.prototype.draw = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 20, 20);
};

//method to check for missile contact
Missile.prototype.checkForMissileHit = function(spaceship) {
    if ((spaceship.x >= (this.x - 30) && spaceship.x <= (this.x + 30)) &&
        (spaceship.y >= (this.y - 20) && spaceship.y <= (this.y + 20))) {
        spaceship.y = -400;
        this.y = -100;
        numShips--;
        score++;
        }
};

//method for missile movement and to check for missile hits
Missile.prototype.move = function() {
    this.y -= missileSpeed;
    
    for(var i = 0; i < ships.length; i++){
        this.checkForMissileHit(ships[i]);
    
    }
    
    if(this.y === 0){
        Missile.y = 400;
    
    }
};


var turret = new Turret(190, 400);


//For Loop to randomly fill array with spaced ships
for (var i = 0; i < numShips; i++){
    ships.push(new spaceShip(random(20, 360), i * - 100, 1));

}
//keysPressed and keyReleased allow for easier movement
keyPressed = function() {
   keysDown[keyCode] = true;
};

keyReleased = function() {
   keysDown[keyCode] = false;
};

//draws splash screen
var splashScene1 = function(){
    


};

//draws game scene
var gameScene2 = function(){
    background(255, 255, 255);
    //loop to draw and move ships
    for(var i = 0; i < ships.length; i++){
        ships[i].draw();
        ships[i].move();
    }
    //boolean that controls turret aim direction, using left and right arrow keys
    if(keysDown[RIGHT]){
        turret.moveRight();
    }
    if(keysDown[LEFT]){ 
        turret.moveLeft();
    }
    if(keysDown[32]){
        //boolean to control missile launch
        if(frameCount % 20 === 0) {
        missiles.push(new Missile(turret.x, 350));
        }    
    }  
    //loop to keep drawing and moving missiles
    for(var i = 0; i < missiles.length; i++){
        missiles[i].draw();
        missiles[i].move();
        if(missiles[i].y < 10){
            missiles.splice(i,1);
            i--;
            
        }
    }
    //loss condition
    if(turretHealth === 0){
     noLoop();
     textSize(35);
     fill(255, 0, 0);
     text("GAME OVER",100,200);
    }
    textSize(20);
    fill(255, 0, 0);
    text("Score :  " + score, 20,350);
    //call turret   
    turret.draw();
    turret.healthDraw();

};

//draws the boss battle scene
var bossScene3 = function(){
  
};
//Function to draw falling ships
draw = function() {
    gameScene2();
   
};
