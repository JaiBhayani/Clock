var hours, minutes, seconds;



function setup() {
  createCanvas(800,400);
 
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  
  translate(200,200);
  rotate(-90);
  hours = hour();
  minutes = minute();
  seconds = second();
  

  secAngle = map(seconds, 0, 60, 0,360);
  minAngle = map(minutes, 0, 60, 0,360);
  hourAngle = map(hours% 12, 0, 12, 0,360);

push();
rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(5);
  line(0,0,100,0);
pop();
strokeWeight(10);
stroke(255,0,0);
noFill();
arc(0,0,300,300,0,secAngle);

push();
rotate(minAngle);
  stroke(100,0,0);
  strokeWeight(5);
  line(0,0,100,0);
pop();
strokeWeight(10);
stroke(20,90,20);
noFill();
arc(0,0,300,300,0,minAngle);

push();
rotate(hourAngle);
  stroke(10,20,40);
  strokeWeight(5);
  line(0,0,100,0);
pop();
strokeWeight(10);
stroke(255,0,0);
noFill();
arc(0,0,300,300,0,hourAngle);
}