
// Making the canvas

function setup() {
  createCanvas(600, 400);
}


//Initializing our variables

let move = 1;
let y = 305;
let triangle_point = 500
let multiplier = 6;
let ceiling = false;
let score = 0;
let screen = 'start';


// Main function, runs every 1/60 seconds unless you change the frame rate

function draw() {

  if (screen == 'run'){
  
    collide();
    init();
    
    move= move + 1 * multiplier
    if (triangle_point-move<50){
      ceiling = random([false,true]);
      triangle_point = random(340, 580);
      move = 0;
      multiplier += .15;
      score +=1;
      }
  }
  else if (screen == 'game_over'){
    end_screen()
  }
  else if (screen == 'start'){
    start_screen()
  }
    

}
  

  


function keyPressed() {
  
  if (key === 'f') {
    if (screen == 'start' || screen == 'game_over'){
      variables_init()
      screen = 'run'
    }
    //changing position of our player 
    if (y == 305){
      y = 40; 
    }
    else{
      y = 305;
    }
  }

}



function init() {

  // For background color
  background("black");

  // Making our square(player) with a light blue color, stroke is automatically set to white so we need to set it to light blue again 
  fill('lightblue');
  stroke('lightblue');
  square(200,y,50);


  // Properties for our triangle 
  stroke('white');
  strokeWeight(5);
  line(0,40,600,40);
  line(0,360,600,360);
  stroke('red');
  fill('red')


  // Changing our y position if ceiling is true
  if (ceiling){
    triangle(triangle_point-move,90,triangle_point+20-move,45,triangle_point-20-move,45)
  }  
  else{
    triangle(triangle_point-move,310,triangle_point+20-move,355,triangle_point-20-move,355)
  }

  // Scoren text
  textSize(24)
  fill('yellow')
  stroke('black');
  text('Score: '+ score, 530,20)
  
}




function collide(){
  let x_collide = false;
  let same_side = false;
  
  if (ceiling && y == 40){
      same_side = true;
  }
  else if (!ceiling && y == 305){
      same_side = true;
  }
  else{
      same_side = false;
  }
  
  
  if (same_side){
    if (triangle_point-20-move > 200 && triangle_point-20-move < 249){
      screen = 'game_over'
    }
  }

    
}


function end_screen(){
  clear();

  background("black");
  textSize(24)
  fill('white')
  textAlign(CENTER, CENTER);
  text('You lost with a score of: '+ score, 300,200)
  text('Press f to start game again', 300, 227)
}


function start_screen(){
  clear();
  background("black");
  textSize(24)
  fill('white')
  textAlign(CENTER, CENTER);
  text('Press f to start game', 300,200)
  text('Press f to filp when game starts', 300, 227)
  
}



function variables_init(){
  move = 1;
  y = 305;
  triangle_point = 500
  multiplier = 6;
  ceiling = false;
  score = 0;
}