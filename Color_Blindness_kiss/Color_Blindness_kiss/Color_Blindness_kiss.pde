/*
Author: Carlos Coca
Date: 11/2/2019
Inspiration: VandyHacks VI Art Edition
Program Name: Color_Blindness_starrynight

*/ 

PImage img; 

void setup(){
  size(750,562);
  img = loadImage("kiss.jpg"); 
}

void draw(){
  loadPixels();
  img.loadPixels();
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
     int loc = x+y*width;
     pixels[loc] = img.pixels[loc];
      
      float b = brightness(img.pixels[loc]);
      if (b > 85 && b < 110){
        pixels[loc] = color (26,133,255);
      } else if (b > 50 && b < 84) {
          pixels[loc] = color (220,50,82);
        } else if (b > 30 && b < 45){
          pixels[loc] = color (225,190,106);
        }
        else {
          pixels[loc] = color (88,87,87);
        } 
    }
  }
  updatePixels();
  save("updated.png");
}
