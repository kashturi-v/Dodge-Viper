/**
 * In this program, we will make a car using 
 * ellipses and lines, which can move left 
 * to right using the draw function.
 * Author: Kashturi V
 * Last modified: March 8, 2015
 */
noStroke();

var carX=151;
var carY=321;
var tree= getImage("cute/TreeTall");
var person=getImage("avatars/orange-juice-squid");

var draw = function() {
    background(25, 17, 56);
    fill(237, 230, 208);
    ellipse(50, 59, 35, 35);
    fill(25, 17, 56);
    ellipse(56,57,35, 35);
    
    //trees
    image(tree,22,143,90,200);
    image(tree,71,143,90,200);
    image(tree,126,143,90,200);
    image(tree,-27,143,90,200);
    image(tree,169,143,90,200);
    image(tree,222,143,90,200);
    image(tree,274,143,90,200);
    image(tree,325,143,90,200);
    // clouds 
    fill(179, 173, 179);
    // left cloud
    ellipse(63, 56, 22, 13);
    ellipse(74, 56, 10, 6);
    ellipse(52, 57, 10, 6);
    // right cloud
    ellipse(19, 63, 22, 13);
    ellipse(32, 63, 10, 6);
    ellipse(7, 64, 10, 6);
     //person
    image(person,carX+41,235,31,31);
    //color
    noStroke();
    fill(173, 170, 170);
    ellipse(carX+183,carY-19,5,4);
    ellipse(carX-10,carY-62,82,10);
    ellipse(carX-25,carY-54,82,34);
    ellipse(carX+44,carY-58,82,11);
    ellipse(carX+47,carY-37,221,38);
    ellipse(carX+130,carY-63,51,8);
    ellipse(carX+148,carY-57,35,10);
    ellipse(carX+114,carY-56,82,10);
    ellipse(carX+144,carY-41,70,31);
    ellipse(carX+182,carY-43,19,-10);
    ellipse(carX+189,carY-41,12,10);
    ellipse(carX+66,carY-22,238,10);
    ellipse(carX+169,carY-31,22,27);
    ellipse(carX+162,carY-24,50,14);
    ellipse(carX-35,carY-43,83,54);
    ellipse(carX-39,carY-56,82,18);
    ellipse(carX-40,carY-53,82,34);
    ellipse(carX-39,carY-45,82,17);
    ellipse(carX-39,carY-68,86,7);
    ellipse(carX-79,carY-61,-5,23);
    // color of top of car
    fill(74, 68, 74);
    ellipse(carX-31,carY-73,41,8);
    ellipse(carX-2,carY-80,38,8);
    ellipse(carX-15,carY-77,41,8);
    ellipse(carX+24,carY-84,41,8);
    ellipse(carX+108,carY-67,17,8);
    ellipse(carX+102,carY-70,17,8);
    ellipse(carX+105,carY-65,5,8);
    ellipse(carX+90,carY-77,16,7);
    ellipse(carX+97,carY-73,17,8);
    ellipse(carX+82,carY-81,17,4);
    ellipse(carX+68,carY-84,17,5);
    ellipse(carX+54,carY-86,49,3);
    ellipse(carX+40,carY-86,30,4);
    ellipse(carX+83,carY-78,4,4);
    ellipse(carX-13,carY-75,17,8);
    ellipse(carX-54,carY-71,10,4);
    ellipse(carX+102,carY-67,7,8);
    ellipse(carX+107,carY-65,7,8);
    ellipse(carX+82,carY-79,4,4);
    ellipse(carX+76,carY-83,12,4);
    ellipse(carX+58,carY-86,4,4);
    ellipse(carX+57,carY-84,18,4);
    ellipse(carX+48,carY-84,12,4);
    ellipse(carX+18,carY-81,4,4);
    ellipse(carX-19,carY-71,14,4);
    ellipse(carX+01,carY-83,9,4);
    ellipse(carX-48,carY-71,25,4);
    ellipse(carX-38,carY-75,11,4);
    //colour of top headlight
    fill(74, 73, 66);
    ellipse(carX+183,carY-48,5,4);
    ellipse(carX+165,carY-56,5,4);
    ellipse(carX+181,carY-49,5,4);
    ellipse(carX+177,carY-49,5,4);
    ellipse(carX+169,carY-51,5,4);
    ellipse(carX-73,carY-64,11,5);
    ellipse(carX+176,carY-50,12,4);
    ellipse(carX+172,carY-53,12,4);
    ellipse(carX+168,carY-54,12,4);
    ellipse(carX+183,carY-49,5,4);
    //colour of bottom headlight
    ellipse(carX+180,carY-33,4,4);
    ellipse(carX+189,carY-33,4,4);
    ellipse(carX+185,carY-33,12,4);
    ellipse(carX+184,carY-36,17,4);
    ellipse(carX+185,carY-30,12,4);
    //colour of backlight
    ellipse(carX-73,carY-64,11,4);
    ellipse(carX-75,carY-61,6,4);
    
    stroke(0, 0, 0);
    //side arc
    line(carX-82.3,carY-73.2,carX-80.5,carY-48.4);
    line(carX-80.9,carY-50,carX-74.2,carY-33);
    line(carX-74.2,carY-33,carX-60,carY-20);
    
    //wheel
    noStroke();
    fill(10, 9, 10);
    ellipse(carX-43,carY-32,42.5,42.5);
    fill(77, 67, 67);
    ellipse(carX-43,carY-32,33.5,33.5);
    fill(0, 0, 0);
    ellipse(carX-43,carY-32,5,5);
    line(carX-100,carY-10,carX+302,carY-10);
    stroke(0, 0, 0);
    //bottom
    line(carX-27.5,carY-18,carX+120.5,carY-18);
    //side left
    line(carX+158,carY-17.5,carX+184,carY-18);
    line(carX+184,carY-18,carX+195,carY-42);
    line(carX+195,carY-42,carX+180,carY-52);
    line(carX+180,carY-52,carX+164,carY-60.5);
    line(carX+164,carY-60.5,carX+143,carY-66);
    line(carX+143,carY-66.5,carX+126,carY-67);
    line(carX+126,carY-67,carX+118,carY-66.5);
    line(carX+118,carY-66.5,carX+106.5,carY-61);
    line(carX+105,carY-60.7,carX+89.5,carY-59);
    line(carX+89.5,carY-59,1+carX+63,carY-61.3);
    line(carX+64,carY-61.5,carX+32.5,carY-64);
    line(carX+32.5,carY-64,carX+14,carY-66.5);
    //bottom/top arc
    line(carX+14,carY-66.5,carX-13,carY-70.5);
    line(carX-13,carY-70.5,carX+5,carY-77);
    line(carX+6,carY-77,carX+22.5,carY-80.5);
    line(carX+22.5,carY-80.5,carX+14,carY-66.5);
    line(carX+22.5,carY-80.5,carX+52,carY-84.5);
    line(carX+52,carY-84.5,carX+68,carY-83.5);
    line(carX+68,carY-83.5,carX+85,carY-76.5);
    line(carX+85,carY-76.5,carX+103,carY-62);
    //top arc
    line(carX+118,carY-66.5,carX+109,carY-72);
    line(carX+110,carY-72,carX+86,carY-82);
    line(carX+86,carY-82,carX+65,carY-87.5);
    line(carX+65,carY-87.5,carX+40,carY-89.5);
    line(carX+40,carY-89.5,carX+13.5,carY-87);
    line(carX+13.5,carY-87,carX-9, carY-83.5);
    line(carX-9,carY-83.5,carX-31,carY-79.5);
    line(carX-31,carY-79.5,carX-65,carY-70.5);
    //side body curve
    line(carX-82.7,carY-70.8,carX-65,carY-70.5);
    line(carX-65,carY-70.5,carX-40,carY-70.5);
    line(carX-40,carY-70.5,carX-35,carY-70.5);
    line(carX-35,carY-70.5,carX-24.5,carY-70);
    line(carX-24.5,carY-70,carX-13,carY-70.5);
    //inside design
    line(carX+14,carY-64.8,carX+7.5,carY-52);
    line(carX+7.5,carY-54,carX+9.5,carY-51.2);
    line(carX+9.5,carY-51.2,carX+48.5,carY-50);
    line(carX+48.5,carY-50,carX+75,carY-47);
    line(carX+9.5,carY-51.5,carX-7.5, carY-49.5);
    line(carX-7.5,carY-49.5,carX+3,carY-36.5);
    line(carX+3,carY-36.5,carX+30,carY-28);
    line(carX+9.5,carY-51.5,carX+15,carY-39);
    line(carX+14,carY-40.5,carX+30,carY-28);
    line(carX+30,carY-28,carX+45,carY-27);
    line(carX+45,carY-27,carX+101,carY-25.5);
    line(carX+101,carY-25.5,carX+106,carY-38);
    line(carX+106,carY-38,carX+107.3,carY-61);
    //door knob
    rect(carX+16,carY-62,9,2);
    // wheel
    noStroke();
    fill(0, 0, 0);
    ellipse(carX+139,carY-29.5,42.5,42.5);
    fill(77, 67, 67);
    ellipse(carX+139,carY-30,33.5,33.5);
    fill(0, 0, 0);
    ellipse(carX+139,carY-30,5,5);
    
    //headlight
    stroke(0, 0, 0);
    line(carX-77.5,carY-58.5,carX-66.7,carY-66);
    line(carX-68.5,carY-66,carX-78,carY-67.3);
    line(carX-78,carY-66.6,carX-77.5,carY-57.1);
    // front headlights
    line(carX+191,carY-36.4,carX+177.0,carY-38);
    line(carX+177.0,carY-38,carX+180,carY-29.8);
    line(carX+181,carY-30.3,carX+187,carY-27);
    //front bottomlight
    line(carX+187,carY-46.5,carX+175,carY-48.5);
    line(carX+175,carY-48.5,carX+165.5,carY-51.5);
    line(carX+165.5,carY-51.5,carX+159.5,carY-56);
    line(carX+159.5,carY-56,carX+170,carY-57.5);
    // Road
    noStroke();
    fill(101, 102, 101);
    rect(0, 310, 1000, 90);
    
    //tree     
    image(tree,282,287,90,200);
    image(tree,236,287,90,200);
    image(tree,327,287,90,200);    
    image(tree,192,287,90,200); 
    image(tree,143,287,90,200);
    image(tree,93,287,90,200);
    image(tree,49,287,90,200); 
    image(tree,-1,287,90,200);
    image(tree,-54,287,90,200);
   
    carX+=3;

          
          
          if (carX > 525) {
        carX = -150;
    }
};    
    
    
