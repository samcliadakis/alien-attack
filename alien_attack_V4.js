//Create Object Class for Spaceships, missiles, and turret??
//Use methods from Frogger 
//Week 1 To-Do: (1) Give collision physics to turret/tank + health bar?? (2) Create template for Splash Scene and Game Scene. (3) Add Khan buttons for win screen and splash screen, pause button? (4) Finalize Rules

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

//Matt Bitmoji Code
var drawHead = function(mattX,mattY,mattH){
    fill(252, 252, 252);
    strokeWeight(1);
    bezier(mattX+244*mattH/150, mattY+255*mattH/150, mattX+311*mattH/150, mattY+88*mattH/150     , mattX+111*mattH/150, mattY+106*mattH/150, mattX+155*mattH/150, mattY+252*mattH/150);      //top line of hoodie
    bezier(mattX+236*mattH/150, mattY+252*mattH/150, mattX+276*mattH/150, mattY+96*mattH/150     , mattX+122*mattH/150, mattY+135*mattH/150, mattX+163*mattH/150, mattY+251*mattH/150);      //bottom line of hoodie

    fill(255, 255, 255);
    rect(mattX+200*mattH/150,mattY+298*mattH/150,119*mattH/150,95*mattH/150,5*mattH/150);       //body
    fill(247, 203, 153); //neck color
    rect(mattX+200*mattH/150,mattY+232*mattH/150,30*mattH/150,50*mattH/150,49*mattH/150);       //neck
    
    fill(255, 255, 255); //bottom hoodie color
    bezier(mattX+155*mattH/150, mattY+251*mattH/150, mattX+196*mattH/150, mattY+288*mattH       /150, mattX+239*mattH/150, mattY+259*mattH/150, mattX+246*mattH/150, mattY+251*mattH/150     ); //bottomtop line of hoodie
    bezier(mattX+163*mattH/150, mattY+251*mattH/150, mattX+202*mattH/150, mattY+267*mattH       /150, mattX+230*mattH/150, mattY+257*mattH/150, mattX+238*mattH/150, mattY+250*mattH/150     ); //bottommost line of hoodie

    fill(247, 203, 153); //ear color
    arc(mattX+163*mattH/150,mattY+194*mattH/150,9*mattH/150,20*mattH/150,70*mattH/150,304       *mattH/150); //left ear
    arc(mattX+237*mattH/150,mattY+194*mattH/150,9*mattH/150,20*mattH/150,-126,108); //right     ear
    
    fill(247, 203, 153); //face color
    ellipse(mattX+200*mattH/150,mattY+199*mattH/150,73*mattH/150,100*mattH/150); //head
    
    fill(255, 255, 255); //eye color
    ellipse(mattX+185*mattH/150,mattY+191*mattH/150,16*mattH/150,6*mattH/150); //left eye
    ellipse(mattX+215*mattH/150,mattY+191*mattH/150,16*mattH/150,6*mattH/150); //right eye
    
    fill(247, 203, 153); // nose color
    arc(mattX+196*mattH/150,mattY+208*mattH/150,9*mattH/150,7*mattH/150,74,302); //left nose     arc
    arc(mattX+204*mattH/150,mattY+208*mattH/150,9*mattH/150,7*mattH/150,-118,102); //right      nose arc
    line(mattX+204*mattH/150,mattY+205*mattH/150,mattX+203*mattH/150,mattY+192*mattH/150);      //right nose line
    line(mattX+196*mattH/150,mattY+204*mattH/150,mattX+197*mattH/150,mattY+192*mattH/150);      //left nose line
    
    fill(66, 49, 5); //pupil fill
    ellipse(mattX+185*mattH/150,mattY+191*mattH/150,3*mattH/150,2*mattH/150); //left pupil
    ellipse(mattX+215*mattH/150,mattY+191*mattH/150,3*mattH/150,2*mattH/150); //right pupil
    
    fill(0, 0, 0); //nostril color
    ellipse(mattX+197*mattH/150,mattY+211*mattH/150,4*mattH/150,0*mattH/150); //left nostril
    ellipse(mattX+204*mattH/150,mattY+211*mattH/150,4*mattH/150,0*mattH/150); //right           nostril
    
    arc(mattX+200*mattH/150,mattY+225*mattH/150,29*mattH/150,15*mattH/150,-9,193); //mouth
    fill(255, 255, 255); //teeth color
    arc(mattX+200*mattH/150,mattY+226*mattH/150,22*mattH/150,7*mattH/150,-26,204); //teeth

    fill(41, 13, 13); //hair and brow color
    strokeWeight(2); //eyebrow thickness
    line(mattX+193*mattH/150,mattY+183*mattH/150,mattX+179*mattH/150,mattY+181*mattH/150);      //left eyebrow
    line(mattX+219*mattH/150,mattY+180*mattH/150,mattX+206*mattH/150,mattY+183*mattH/150);      //right eyebrow
    line(mattX+224*mattH/150,mattY+182*mattH/150,mattX+219*mattH/150,mattY+180*mattH/150);      //right eyebrow corner
    line(mattX+175*mattH/150,mattY+183*mattH/150,mattX+179*mattH/150,mattY+181*mattH/150);      //left eyebrow corner
    
    noStroke(); 
    arc(mattX+167*mattH/150,mattY+191*mattH/150,4*mattH/150,44*mattH/150,170,311); // left      side hair
    arc(mattX+170*mattH/150,mattY+178*mattH/150,8*mattH/150,27*mattH/150,177,311); //left       side hair
    arc(mattX+172*mattH/150,mattY+175*mattH/150,8*mattH/150,27*mattH/150,186,317); //left       side hair
    arc(mattX+176*mattH/150,mattY+170*mattH/150,8*mattH/150,26*mattH/150,192,321); //left       side hair
    ellipse(mattX+226*mattH/150,mattY+163*mattH/150,12*mattH/150,12*mattH/150); //hair
    quad(mattX+223*mattH/150, mattY+161*mattH/150, mattX+179*mattH/150, mattY+158*mattH/150,     mattX+196*mattH/150, mattY+149*mattH/150, mattX+215*mattH/150, mattY+151*mattH/150);        //hair
    ellipse(mattX+223*mattH/150,mattY+160*mattH/150,11*mattH/150,11*mattH/150);//soo much       hair
    ellipse(mattX+216*mattH/150,mattY+157*mattH/150,15*mattH/150,12*mattH/150); //hair
    arc(mattX+236*mattH/150,mattY+197*mattH/150,4*mattH/150,56*mattH/150,204,336); //hair
    arc(mattX+232*mattH/150,mattY+190*mattH/150,9*mattH/150,56*mattH/150,204,336); //hair
    ellipse(mattX+211*mattH/150,mattY+155*mattH/150,15*mattH/150,12*mattH/150); //hair
    ellipse(mattX+191*mattH/150,mattY+155*mattH/150,16*mattH/150,8*mattH/150); //hair
    ellipse(mattX+182*mattH/150,mattY+159*mattH/150,13*mattH/150,6*mattH/150); //hair
};
var drawBody = function(mattX,mattY,mattH){
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(252, 252, 252); //drawstring hole color
    ellipse(mattX+189*mattH/150,mattY+263*mattH/150,5*mattH/150,5*mattH/150); // left           pullstring hole
    ellipse(mattX+212*mattH/150,mattY+263*mattH/150,5*mattH/150,5*mattH/150); // right          pullstring hole
    
    fill(247, 203, 153); //chest color
    arc(mattX+200*mattH/150,mattY+250*mattH/150,70*mattH/150,19*mattH/150,10,172); //chest
    line(mattX+214*mattH/150,mattY+250*mattH/150,mattX+235*mattH/150,mattY+250*mattH/150);      //chest line right
    line(mattX+163*mattH/150,mattY+250*mattH/150,mattX+184*mattH/150,mattY+250*mattH/150);      //chest line left
    line(mattX+187*mattH/150,mattY+298*mattH/150,mattX+187*mattH/150,mattY+263*mattH/150);      //left left drawstring line
    line(mattX+190*mattH/150,mattY+298*mattH/150,mattX+190*mattH/150,mattY+263*mattH/150);      //left right drawstring line
    line(mattX+210*mattH/150,mattY+298*mattH/150,mattX+210*mattH/150,mattY+263*mattH/150);      //right left drawstring line
    line(mattX+213*mattH/150,mattY+298*mattH/150,mattX+213*mattH/150,mattY+263*mattH/150);      //right right drawstring line
    fill(255, 255, 255); //pullstring knot color
    ellipse(mattX+189*mattH/150,mattY+300*mattH/150,8*mattH/150,7*mattH/150); //pullstring      knot left
    ellipse(mattX+212*mattH/150,mattY+300*mattH/150,8*mattH/150,7*mattH/150); //pullstring      knot right
    
    strokeWeight(3);
    line(mattX+161*mattH/150,mattY+344*mattH/150,mattX+169*mattH/150,mattY+313*mattH/150);      //initial M
    line(mattX+176*mattH/150,mattY+330*mattH/150,mattX+169*mattH/150,mattY+313*mattH/150);      //initial M
    line(mattX+176*mattH/150,mattY+330*mattH/150,mattX+182*mattH/150,mattY+313*mattH/150);      //initial M
    line(mattX+190*mattH/150,mattY+343*mattH/150,mattX+183*mattH/150,mattY+313*mattH/150);      //initial M
    line(mattX+207*mattH/150,mattY+343*mattH/150,mattX+207*mattH/150,mattY+313*mattH/150);      //initial P
    ellipse(mattX+217*mattH/150,mattY+318*mattH/150,19*mattH/150,21*mattH/150); //initial P
    
    stroke(0, 0, 0);
    fill(0, 0, 0);
    ellipse(mattX+232*mattH/150,mattY+269*mattH/150,6*mattH/150,6*mattH/150); //polohorse
    ellipse(mattX+239*mattH/150,mattY+275*mattH/150,9*mattH/150,8*mattH/150); //polo horse      body
    line(mattX+236*mattH/150,mattY+279*mattH/150,mattX+233*mattH/150,mattY+283*mattH/150);      //polo horse left leg 
    line(mattX+242*mattH/150,mattY+279*mattH/150,mattX+246*mattH/150,mattY+284*mattH/150);      //polo horse right leg
    ellipse(mattX+240*mattH/150,mattY+263*mattH/150,3*mattH/150,3*mattH/150); //polo man        head
    strokeWeight(1);
    line(mattX+240*mattH/150,mattY+264*mattH/150,mattX+240*mattH/150,mattY+276*mattH/150);      //polo man body
    line(mattX+236*mattH/150,mattY+264*mattH/150,mattX+240*mattH/150,mattY+273*mattH/150);      //polo man arm
    line(mattX+246*mattH/150,mattY+265*mattH/150,mattX+242*mattH/150,mattY+269*mattH/150);      //polo man arm
};
var drawBitmojiMatt = function(mattX,mattY,mattH){     //Matt bitmoji function
    stroke(0, 0, 0);
    mattX = mattX-50;
    mattY = mattY-85;
    rectMode(CENTER);
    drawHead(mattX,mattY,mattH);
    drawBody(mattX,mattY,mattH);
};
//Sam Bitmoji Code
var drawBitmojiSam = function(x,y) {                   //Sam bitmoji function
    noStroke();
    fill(11, 53, 59);
    ellipse(x,y-8,95/2,65/2); // hat

    fill(237, 213, 185);
    ellipse(x,y+0,60/2,75/2); // head

    fill(43, 32, 19);
    ellipse(x,y-16,45/2,17/2); // hair

    fill(255, 255, 255);
    ellipse(x-6,y-5,11/2,7/2); // eye 1

    fill(255, 255, 255);
    ellipse(x+6,y-5,11/2,7/2);  // eye2

    fill(0, 0, 0);
    ellipse(x-6,y-5,7/2,7/2);  // pupil 1

    fill(0, 0, 0);
    ellipse(x+6,y-5,7/2,7/2);  // pupil 2

    noFill();
    stroke(156, 116, 116);
    strokeWeight(1);
    arc(x,y+0,15,18,44,132); // mouth

    strokeWeight(1);
    arc(x,y+1,4,6,57,257); // nose

    noStroke();
    fill(176, 152, 95);
    rect(x,y+27,50/2,40/2); // torso

    rect(x+10,y+28,44/2,33/2); // right arm
    rect(x-9,y+28,44/2,33/2); // left arm

    fill(47, 110, 58);
    textSize(28/2);
    text("SC",x-9,y+31); // shirt text

};

//Platform Code
var platforms = function() {
    noStroke();
    
    drawBitmojiSam(358,238);          //draws Sam bitmoji
    drawBitmojiMatt(10,245,50);       //draws Matt bitmoji
    
    noStroke();
    fill(102, 88, 61);
    
    rect(372,279,90,8);
    rect(358,351,4,142);              //creates right platform
    
    for(var z=0;z<20;z++)
        {
            rect(387,284+ z*8,55,2);  //creates right ladder
        }

    rect(26,279,62,8);
    rect(24,351,4,142);              //created left platform
    
    for(var z=0;z<20;z++)
        {
            rect(11,284+ z*8,25,2);  //creates left ladder
        }

};

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
    //Antennas
    line(this.x + 16* this.size,this.y, this.x + 20* this.size, this.y - 16* this.size);
    line(this.x - 16* this.size,this.y, this.x - 20* this.size, this.y - 16* this.size);       

    strokeWeight(1);
    rectMode(CENTER); 
    ellipse(this.x,this.y-15* this.size,7* this.size,5* this.size);         //Top knob
    noStroke();
    
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

//Mothership Object Class
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
//Turret Constructor Function
var Turret = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 50;
};

//Turret draw Method
Turret.prototype.draw = function() {
    rectMode(CENTER);
    noStroke();
    
    fill(128, 128, 128);
    rect(this.x,this.y-12,93,28);                    //body of tank
    
    fill(161, 161, 161);
    triangle(this.x-44,this.y-26,this.x-19,this.y-26,this.x-19,this.y-33);
    triangle(this.x+46,this.y-26,this.x+19,this.y-26,this.x+19,this.y-33);  //slanted roof
    
    rect(this.x,this.y-30,40,7);
    rect(this.x,this.y-52,10,37);                     //turret
    
    fill(176, 176, 176);
    rect(this.x,this.y-64,16,12);                    //top of turret      
    
    stroke(255, 255, 255);                
    fill(0, 0, 0);
    
    ellipse(this.x-39,this.y-3,16,16);                 //outside of wheel
    ellipse(this.x+41,this.y-3,16,16);
    
    fill(217, 217, 217);
    ellipse(this.x-39,this.y-3,5,5);                   //inside of wheel
    ellipse(this.x+41,this.y-3,5,5);
};
//Turret Health Draw Method
Turret.prototype.healthDraw = function() {
    fill(255, 0, 0);
    text("Turret Health : " + turretHealth, 10, 54);
    
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
    rectMode(CENTER);
    
    fill(66, 66, 66);
    noStroke();
    
    rect(this.x+1,this.y,10,14);                    //base of bullet
    fill(158, 158, 158);
    arc(this.x+1,this.y-7,10,17,-180,0);            //top of bullet

    noStroke();
    fill(255, 0, 0);
    
    triangle(this.x-5,this.y+5,this.x-3,this.y+10,this.x-1,this.y+5);
    triangle(this.x+4,this.y+5,this.x+5,this.y+10,this.x+7,this.y+5);
    fill(255, 200, 0);      //flames
    triangle(this.x-3,this.y+5,this.x+1,this.y+10,this.x+5,this.y+5);
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
    //loop checks for missile contact
    for(var i = 0; i < ships.length; i++){
        this.checkForMissileHit(ships[i]);
        this.checkForMotherShipHit(motherShip);
    }
    //if the missile reaches the top of the screen, move the missile off screen
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
var turret = new Turret(190, 395);
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
    if(score >= 50){
    currentScene = 2;
    }
    
    textSize(20);
    fill(255, 0, 0);
    text("Score :  " + score, 10,25);
    
    //call turret   
    turret.draw();
    turret.healthDraw();
    platforms();
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
        //conditional to remove missiles on contact from array
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
