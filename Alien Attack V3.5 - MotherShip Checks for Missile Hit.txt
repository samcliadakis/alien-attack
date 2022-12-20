//Create Object Class for Spaceships, missiles, and turret??
//Use methods from Frogger 
//Week 1 To-Do: (1) Give collision physics to turret/tank + health bar?? (2) Create template for Splash Scene and Game Scene. (3) Add Khan buttons for win screen and splash screen, pause button?

//Global Variables
var currentScene = 1; //variable to control scene switches
var score = 0; //score for shooting spaceships
var shipSpeed = 1; //general value for spaceship speed
var numShips = 15; //number of ships looping through array
var missileSpeed = 5; //value for speed of missile movement
var turretHealth = 3; // turret health effected by ships touching the ground
var motherShipHealth = 50;  //number of hits it takes to destroy mother ship
var mShip = 0; //value to control which side the mother ships is moving from

//Mother Ship position values. Needed to drop Y Position of Mother Ship
var mPos = 100;
var mPos2 = 150;
var mPos3 = 250;
var mPos4 = 300;

//Arrays
var keysDown = [];
var missiles = [];
var ships = [];


//Spaceship Object Class
//Spaceship Constructor Function
var spaceShip = function(x, y, size) {  
    this.x = x;
    this.y = y;
    this.size = size;
};
//Spaceship Draw Method
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
//Spaceship Movement Method
spaceShip.prototype.move = function(){
    this.y += shipSpeed;
    if(this.y > height){
        this.x = random(10, width);
        this.y = - random(20,920);
        score--;
        turretHealth--;
    }
};

//Mothership Constructor Function
var motherShip = function(x, y, size){ //mother ship constructor function
    this.x = x;
    this.y = y;
    this.size = size;
};
//Mothership Draw Method
motherShip.prototype.draw = function() {
    var spaceshipColors = [color(214, 88, 88),color(61, 100, 255),color(137, 48, 209)];

    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);

    line(this.x + 16* this.size,this.y, this.x + 20* this.size, this.y - 16* this.size);
    line(this.x - 16* this.size,this.y, this.x - 20* this.size, this.y - 16* this.size);      //Antennas 

    strokeWeight(1);
    rectMode(CENTER); 
    //noStroke();
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
            windowx = windowx +12;
        }
};
//Mothership Movement Method
motherShip.prototype.move = function(){
//I couldn't use this.y+= because the mother ship would crash immediately. The conditionals below ensure that the ship drops 50px whenever it touches a side and reverses the x direction.    
    if(this.x <= 50 && this.y === this.y){
        mShip = 0;
        }
    else if(this.x >= width - 50 && this.y === this.y){
        mShip = 1;
        }
    else if(this.x <= 60 && this.y === mPos){
        mShip = 2;
        }
    else if(this.x >= width - 60 && this.y === mPos2){
        mShip = 3;
        }
    else if(this.x <= 60 && this.y === mPos3){
        mShip = 4;
    }
    if(mShip === 0){
        this.x += shipSpeed;
        }
    else if(mShip === 1){
        this.x -= shipSpeed;
        this.y = mPos;
        }
    else if(mShip === 2){
        this.x += shipSpeed;
        this.y = mPos2;
        }
    else if(mShip === 3){
        this.x -= shipSpeed;
        this.y = mPos3;
        }
    else if(mShip === 4){
        this.x += shipSpeed;
        this.y = mPos4;
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
//Missile Constructor Function
var Missile = function(x,y){
    this.x = x;
    this.y = y;
};
//Missile Draw Method
Missile.prototype.draw = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 20, 20);
};
//Method to check for missile contact with spaceships
Missile.prototype.checkForMissileHit = function(spaceship) {
    if ((spaceship.x >= (this.x - 30) && spaceship.x <= (this.x + 30)) &&
        (spaceship.y >= (this.y - 20) && spaceship.y <= (this.y + 20))) {
        spaceship.y = -400;
        this.y = -100;
        numShips--;
        score++;
        }
};
//Method to check for missile contact with mothership
Missile.prototype.checkForMotherShipHit = function(mothership){
    if ((mothership.x >= (this.x - 60) && mothership.x <= (this.x + 60)) &&
        (mothership.y >= (this.y - 35) && mothership.y <= (this.y + 35))) {
        this.y = -100;
        motherShipHealth--;
        }
};
//method for missile movement and to check for missile hits
Missile.prototype.move = function() {
    this.y -= missileSpeed;
    
    for(var i = 0; i < ships.length; i++){
        this.checkForMissileHit(ships[i]);
        this.checkForMotherShipHit(motherShip);
    }
    
    if(this.y === 0){
        Missile.y = 400;
    
    }
};

//Button Object Class
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

//Method to draw Button
Button.prototype.draw = function() {
    fill(0, 234, 255);
    rectMode(CENTER);
    rect(this.x+50, this.y +25, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+25, this.y+this.height-35);
};

//Method to check if the mouse position is on Button
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width ) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
           
};

//Method to handle onClick Function when mouse is inside
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

//Calls in NEW turret from Object Class
var turret = new Turret(190, 400);
//Calls in NEW motherships from Object Class
var motherShip = new motherShip(-70,45,2);

//For Loop to fill array with randomly spaced ships
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
var splashScene = function(){
    


};

//draws game scene
var gameScene = function(){
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
    
    //win Condition/Boss Access
    if(score === 50){
    currentScene = 2;
    }
    
    textSize(20);
    fill(255, 0, 0);
    text("Score :  " + score, 20,350);
    
    //call turret   
    turret.draw();
    turret.healthDraw();

};

//draws the boss battle scene
var bossScene = function(){
    stroke(0);
    background(255, 255, 255);
    
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
    
    //call mothership and movement
    motherShip.draw();
    motherShip.move();
    
    //call turret   
    turret.draw();
    
    textSize(20);
    fill(255, 0, 0);
    text("Mothership Health: " + motherShipHealth + " Hits Left", 60, 19);
    
    //Win Condition
    if(motherShipHealth === 0){
        textSize(35);
        fill(255, 0, 0);
        text("You Win!!", 125, 100);
        text("You Saved the World!", 25, 150);
        noLoop();
    }
    
    //Lose Condition
    if(mShip === 4 && motherShip.x === width - 50){
     noLoop();
     textSize(35);
     fill(255, 0, 0);
     text("GAME OVER",100,200);
     textSize(25);
     text("Earth has been Conquered", 50, 240);
    }
    
};

//Draw Function that calls each Scene
draw = function() {
    
    //splash screen
    if(currentScene === 0){
        splashScene();
    }
    //game scene
    else if(currentScene === 1){
        gameScene();
    }
    //boss scene
    else if(currentScene === 2){
       bossScene();
    }
   
   
};
