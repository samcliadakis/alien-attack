var tank = function(x,y) {
    rectMode(CENTER);
    noStroke();
    
    fill(128, 128, 128);
    rect(x,y-12,93,28);                    //body of tank
    
    fill(161, 161, 161);
    triangle(x-44,y-26,x-19,y-26,x-19,y-33);
    triangle(x+46,y-26,x+19,y-26,x+19,y-33);      //slanted roof
    
    rect(x,y-30,40,7);
    rect(x,y-52,8,37);                     //turret
    
    fill(176, 176, 176);
    rect(x,y-64,10,12);                    //top of turret      
    
    stroke(255, 255, 255);                
    fill(0, 0, 0);
    
    ellipse(x-39,y-3,16,16);                 //outside of wheel
    ellipse(x+41,y-3,16,16);
    
    fill(217, 217, 217);
    ellipse(x-39,y-3,5,5);                   //inside of wheel
    ellipse(x+41,y-3,5,5);
};
