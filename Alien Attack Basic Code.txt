//Create Object Class for Spaceships, missiles, and turret??
//Use methods from Frogger 
//Week 1 To-Do: (1) Give collision physics to turret/tank + health bar?? (2) Create template for Splash Scene and Game Scene. (3) Add Khan buttons for win screen and splash screen, pause button?

//Global Variables
var score = 0;
var shipSpeed = 1;
var numShips = 15;
var xSpeed = 0;
var missileSpeed = 5;

//Arrays
var keysDown = [];
var missiles = [];
var ships = [];

// Spaceship Object Class
var spaceShip = function(x, y) {  //Spaceship Constructor Function
    this.x = x;
    this.y = y;
};

spaceShip.prototype.draw = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 40, 20); //center body
    line(this.x +5, this.y + 9, this.x + 13, this.y + 15);
    line(this.x -6, this.y + 9, this.x - 15, this.y + 15);
};

spaceShip.prototype.move = function(){
    this.y += shipSpeed;
    if(this.y > height){
        this.x = random(10, width);
        this.y = - random(20,920);
        score--;
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
    ships.push(new spaceShip(random(20, 360), i * - 100));

}
//keysPressed and keyReleased allow for easier movement
keyPressed = function() {
   keysDown[keyCode] = true;
};

keyReleased = function() {
   keysDown[keyCode] = false;
};

//Function to draw falling ships
draw = function() {
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
        if(missiles[i].y < 0){
            missiles.splice(i,1);
            i--;
        
        }
    }
    textSize(20);
    text("Score :  " + score, 20,350);
    //call turret   
    turret.draw();
};
