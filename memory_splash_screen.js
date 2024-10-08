//global Scene Value
var currentScene = 0;

//code of bitmoji head drawing 
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

//code of bitmoji body drawing
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

//function that draws my bitmoji
var drawBitmoji = function(mattX,mattY,mattH){
    mattX = mattX-50;
    mattY = mattY-85;
    rectMode(CENTER);
    drawHead(mattX,mattY,mattH);
    drawBody(mattX,mattY,mattH);
};

//function that draws Sam's bitmoji
var drawBitmojiSam = function(x,y) {
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
    text("SC",x-9,y+19); // shirt text

};

var Tile = function(x, y, face) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.face = face;
    this.isFaceUp = false;
    this.isMatch = false;
};

Tile.prototype.draw = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    if (this.isFaceUp) {
        image(this.face, this.x, this.y, this.size, this.size);
    } else {
        image(getImage("avatars/leaf-green"), this.x, this.y, this.size, this.size);
    }
};

Tile.prototype.isUnderMouse = function(x, y) {
    return x >= this.x && x <= this.x + this.size  &&
        y >= this.y && y <= this.y + this.size;
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

//start button object class
var startButton = new Button( {
    x: 140,
    y: 250,
    width: 95,
    label: "Start",
        onClick: function() {
        currentScene = 1;
        }
});




// Global config
var NUM_COLS = 6;
var NUM_ROWS = 4;

// Declare an array of all possible faces
var faces = [
    getImage("avatars/leaf-blue"),
    getImage("avatars/robot_male_1"),
    getImage("avatars/robot_male_2"),
    getImage("avatars/robot_male_3"),
    getImage("creatures/Winston"),
    getImage("creatures/OhNoes"),
    getImage("creatures/Hopper-Cool"),
    getImage("avatars/avatar-team"),
    
];

// Make an array which has 2 of each, then randomize it
var possibleFaces = faces.slice(0);
var selected = [];
for (var i = 0; i < (NUM_COLS * NUM_ROWS) / 2; i++) {
    // Randomly pick one from the array of remaining faces
    var randomInd = floor(random(possibleFaces.length));
    var face = possibleFaces[randomInd];
    // Push twice onto array
    selected.push(face);
    selected.push(face);
    // Remove from array
    possibleFaces.splice(randomInd, 1);
}

// Now shuffle the elements of that array
var shuffleArray = function(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var ind = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[ind];
        array[ind] = temp;
    }
};
shuffleArray(selected);

// Create the tiles
var tiles = [];
for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        var tileX = i * 54 + 10;
        var tileY = j * 54 + 40;
        var tileFace = selected.pop();
        tiles.push(new Tile(tileX, tileY, tileFace));
    }
}

background(255, 255, 255);


var numTries = 0;
var numMatches = 0;
var flippedTiles = [];
var delayStartFC = null;

mouseClicked = function() {
    if(currentScene === 0) {
       startButton.handleMouseClick();
    }
    for (var i = 0; i < tiles.length; i++) {
        var tile = tiles[i];
        if (tile.isUnderMouse(mouseX, mouseY)) {
            if (flippedTiles.length < 3 && !tile.isFaceUp) {
                tile.isFaceUp = true;
                flippedTiles.push(tile);
                if (flippedTiles.length === 3) {
                    numTries++;
                    if ((flippedTiles[0].face === flippedTiles[1].face) && (flippedTiles[1].face === flippedTiles[2].face)) {
                        flippedTiles[0].isMatch = true;
                        flippedTiles[1].isMatch = true;
                        flippedTiles[2].isMatch = true;
                        flippedTiles.length = 0;
                        numMatches++;
                    }
                    delayStartFC = frameCount;
                }
            } 
            loop();
        }
    }
};

//Splash scene class
var drawScene1 = function() {
    currentScene = 0;
    background(0, 191, 255);
    fill(0, 0, 0);
    textSize(20);
    text("Memory Game!", 125, 100);
    text("Authors : Matt and Sam", 90, 140);
    startButton.draw();
    drawBitmoji(120,200,50);
    drawBitmojiSam(250, 195);
   };

draw = function() {
    rectMode(CORNER);
    if(currentScene === 1){
    background(255, 255, 255);
    if (delayStartFC && (frameCount - delayStartFC) > 30) {
        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles[i];
            if (!tile.isMatch) {
                tile.isFaceUp = false;
            }
        }
        flippedTiles = [];
        delayStartFC = null;
        noLoop();
    }
    
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].draw();
    }
    
    if (numMatches === tiles.length/2) {
        fill(0, 0, 0);
        textSize(20);
        text("You found them all in " + numTries + " tries!", 20, 375);
    }
    }
};

noLoop();
drawScene1();
