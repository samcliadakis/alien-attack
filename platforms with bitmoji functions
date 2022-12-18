rectMode(CENTER);

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

var drawBitmojiMatt = function(mattX,mattY,mattH){     //Matt bitmoji function
    stroke(0, 0, 0);
    mattX = mattX-50;
    mattY = mattY-85;
    rectMode(CENTER);
    drawHead(mattX,mattY,mattH);
    drawBody(mattX,mattY,mattH);
};

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



var platforms = function() {
    noStroke();
    
    drawBitmojiSam(369,238);          //draws Sam bitmoji
    drawBitmojiMatt(10,245,50);       //draws Matt bitmoji
    
    noStroke();
    fill(102, 88, 61);
    
    rect(372,279,62,8);
    rect(376,351,4,142);              //creates right platform
    
    for(var z=0;z<20;z++)
        {
            rect(387,284+ z*8,25,2);  //creates right ladder
        }

    rect(26,279,62,8);
    rect(24,351,4,142);              //created left platform
    
    for(var z=0;z<20;z++)
        {
            rect(11,284+ z*8,25,2);  //creates left ladder
        }

};
