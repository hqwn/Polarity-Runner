# Making your very own one key game

Hi, my name is Aryan. I'm 14 years old and I will be teaching you how to make this game using p5.js, click on the image to see a video preview 👇

[![game preview](https://cdn.hackclub.com/019f0750-9693-7e08-a555-3d2dea4f909d/Screenshot%202026-06-26%20222203.png)](https://cdn.hackclub.com/019f074e-7cc8-7090-8b84-ec99d8436944/game_preview.mp4)

If you've never made a game before, or even coded, that's fine! If you're worried about using p5.js, don't be! Truth be told, I had to learn p5.js for the first time too while making this game and tutorial!

Before we start, here are some helpful tips:

- If you ever get stuck, or get a nasty error, use Google or ChatGPT, they are your best friend when it comes to coding.

- You can always message me on Slack if you need help, my username is aryanjain9818.

- Have fun and add features!

- CHANGE NUMBERS AND CODE! See what happens if you remove/change something, this is the best way to learn, and understand what everything does.


## Getting Started/ Making the Canvas

Let's get started! First navigate to the [p5.js](https://editor.p5js.org/) coding editor (click on the link), and click on "Start coding" to start a new project. You should see some code like this:

> Make an account so you don't lose your progress!

```
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

```

This is a lot so let's break it down. The setup function just defines our canvas, or how big the game will be, go set it to ```createCanvas(600, 400);``` and click run. This will now show a bigger rectangle screen for us to play on! The draw function is where our main game logic and everything goes, start by doing this for your draw function:

> You can toggle the run button to see what your code does, and click on the stop button to stop it from running. You can also toggle the auto-refresh button so it'll automatically run change and run after you make changes to your code.

```
function draw() {

  if (screen == 'run'){
    run_screen();
  }
  else if (screen == 'game_over'){
    end_screen();
  }
  else if (screen == 'start'){
    start_screen();
  }
    

}

```

This may seem confusing, but what it basically is saying is that if the screen is set to run, we display our main game logic, if screen is game_over then we display our end screen, and if screen is start, we display our start screen, we will code all these screens, so don't worry and just follow along! (screen is a variable, which we will define later, if you don't know what a variable is, it's a little word where we store information, don't worry it'll make sense later)

## Making the Start Screen

Now we have our main draw function, let's start by making our start screen, which is the first screen that shows up when you run the game. We will make this a function called start_screen, that's why there are parentheses after it, a function is just a group of code we can run whenever we want, it helps our code stay more organized and easier to read. So let's make our start screen function, and add some text to it:

```
function start_screen(){
  clear(); // This clears anything we drew on the screen before, so we don't have anything weird from our old screen

  background("black"); // This makes our background black, you can change this to any color you want!

  textSize(24); // This makes our text bigger, you can change this to any number you want, the bigger the number, the bigger the text

  fill('white'); // This makes our text white, you can change this to any color you want!

  textAlign(CENTER, CENTER); // This makes our text centered, so it looks better


  //These bottom lines of code are what actually display the text on the screen, we first write the text we want to show, then we write the x and y coordinates of where we want the text to be. The x is just how far right it needs to be, and the y is just how far down it has to be. Since our screen is 600 by 400, the middle of the screen is 300,200, so we will put our text there. The other text's y is a little different cause we want that text to be below the other one and not overlap.

  text('Press f to start game', 300,200);
  text('Press f to flip when game starts', 300, 227);
  
}

```

What each line of code does, is listed above by the code, also anything you write after // in a line of code is just a comment, meaning whatever you write, the code won't see it, it's just there to help you understand the code better.

Now we are almost ready to test out our start screen, but first we never made the screen variable, so let's do that! At the top of your code write ```let screen = 'start';``` all this is saying is, "hey make a variable called screen and this is what it is set to/means; aka: start" now when our code is running in draw, it will see hey! the screen is set to start so let's run this function, which displays our start screen! Now click run and you should see your start screen! This is what your final code should look like right now:

```
function setup() {
  createCanvas(600, 400);
}

let screen = 'start';

function draw() {

  if (screen == 'run'){
    run_screen();
  }
  else if (screen == 'game_over'){
    end_screen();
  }
  else if (screen == 'start'){
    start_screen();
  }
    
}

function start_screen(){
  clear();
  background("black");
  textSize(24);
  fill('white');
  textAlign(CENTER, CENTER);
  text('Press f to start game', 300,200);
  text('Press f to flip when game starts', 300, 227);
  
}


```

# Keypress detection

Now our start screen is done! Let's make it actually work, so when we press f, it goes to the next screen! Then we can start making our actual game! Unlike other functions, we will have to call using the function name() in draw, we will make a special function called keyPressed, this function automatically runs and detects if a key is pressed. Add this code to your code:

```
function keyPressed() {
  
  if (key === 'f') {
    if (screen == 'start'){
      screen = 'run';
    }
  }

}
```

This code says, if the player presses f, and the screen is set to start, then change the screen to run. Now we have our start screen working, let's make our run screen! I kind of lied on this part, the function I told you to add to your code is not complete, so remove the start_screen() function from your draw function, and replace it with init(), I will explain what we are going to do with this function later, but for now, this is what your draw function should look like:

```


function draw() {

  if (screen == 'run'){
    init();
  }
  else if (screen == 'game_over'){
    end_screen();
  }
  else if (screen == 'start'){
    start_screen();
  }
    

}



```

# Setting up our Variables

We will now make our init function, this function is going to make all of our sprites for our game, like our player, our spikes, and our ceiling. Before that, let's add all of our variables we will need for our game, some of these, we won't quite use yet, but will later, so don't worry about what they mean/do. I'll explain that later. Just add these variables to your code at the top, by the screen variable:

``` 
let move = 1;
let y = 305;
let triangle_point = 500;
let multiplier = 6;
let ceiling = false;
let score = 0;
let screen = 'start';

```

That was kind of confusing, but this is what your entire code should look like right now.

```
function setup() {
  createCanvas(600, 400);
}

let move = 1;
let screen = 'start';
let y = 305;
let triangle_point = 500;
let multiplier = 6;
let ceiling = false;
let score = 0;

function draw() {

  if (screen == 'run'){
    init();
  }
  else if (screen == 'game_over'){
    end_screen();
  }
  else if (screen == 'start'){
    start_screen();
  }
    
}

function keyPressed() {
  
  if (key === 'f') {
    if (screen == 'start'){
      screen = 'run';
    }
  }

}

function start_screen(){
  clear();
  background("black");
  textSize(24);
  fill('white');
  textAlign(CENTER, CENTER);
  text('Press f to start game', 300,200);
  text('Press f to flip when game starts', 300, 227);


  
}
```

# Drawing our sprites (player, spike, etc..) using a function

Now for the most dreaded and hard part, the main game sprites with some logic! Each line of code has a comment by it explaining what it does, and copy this function into your code.

> Quick note: the draw function runs 60 times a second, so any function/code we put in draw will run 60 times a second. So keep that in mind when understanding the game logic.

```

function init() {

  // For background color
  background("black");

  // Properties of our player aka the square
  fill('lightblue'); // Our square is light blue, you can change this to any color you want!
  stroke('lightblue'); // This makes the outline of our square light blue, you can change this to any color you want!
  square(200,y,50); // This draws our square, the first two numbers are the x and y coordinates of the square, and the last number is how big the square is, so if you change it to 100, it will be a bigger square. You might be confused why we have a variable for y? This is because our square's y will change, because when we press f, it falls/goes onto the ceiling. If you don't remember what x and y are, the x is just how far right it needs to be, and the y is just how far down it has to be. This is the last time I'm going to explain what x and y are, so if you forget, come back here.

  // Properties for our triangle 
  stroke('white'); // White outline for our ceiling/floor
  strokeWeight(5); // Making our lines thicker

  line(0,40,600,40); // This makes a line, here is what each number means: the first two numbers are the x and y coordinates of where the line starts, and the last two numbers are the x and y coordinates of where the line ends. So this line starts at 0,40 and ends at 600,40. This is our ceiling, so if our player hits this line, it will be game over. 

  line(0,360,600,360); // Same as the line above except the y, cause this is the floor, our y is bigger to make it lower onto the screen.

  stroke('red'); // Making our triangle's outline red, you can change this to any color you want!
  fill('red') // Making our triangle's fill red, you can change this to any color you want!


  // Now this may be the weirdest part of our code, but let me try explaining it. First of all we have a ceiling variable, this is either true or false, if it's true, we draw our ceiling on the ceiling, else we draw it on the floor. Now for the gajillion variables/numbers. Let me explain by telling you what each number means:

  In a triangle we have 3 points, so the first two numbers are the x and y coordinates of the first point, the second two numbers are the x and y coordinates of the second point, and the last two numbers are the x and y coordinates of the third point like this: triangle(x1,y1,x2,y2,x3,y3). Now you know how to draw a triangle, let's explain the variables. First of all we have triangle_point, this is the x coordinate of the triangle, we don't want the triangle to disappear then appear in the exact same place, so we move it every time it disappears. Now for the move variable, this is just how much the triangle moves towards the player, so we subtract it from the triangle_point to make it move towards the player. Now for the y coordinates, if the ceiling is true, we want the triangle to be on the ceiling, so we set the y coordinates to 90 and 45, else we set them to 310 and 355. If none of that made sense, try asking ChatGPT. Don't ask it right now though, let us add a bit more of code, then you can ask it cause right now we never change the variables. So nothing happens

  if (ceiling){
    triangle(triangle_point-move,90,triangle_point+20-move,45,triangle_point-20-move,45)
  }  
  else{
    triangle(triangle_point-move,310,triangle_point+20-move,355,triangle_point-20-move,355)
  }

  // Score text
  textSize(24) // text size (pretty self explanatory)
  fill('yellow') // Our text is yellow, you can change this to any color you want!
  stroke('black'); // Our text's outline is black, you can change this to any color you want!
  text('Score: '+ score, 530,20) // This displays our score, the first part is just the text we want to show, and the second part is our score variable, which we will change later. The last two numbers are the x and y coordinates of where we want the text to be.
} 

```

# Modifying the key pressed function

Now we are almost done, we made everything, including our spike (the triangle), our player (the square), and our ceiling and floor. Now make our keyPressed function flip our player! This is what your keyPressed function should look like:

```

function keyPressed() {
  
  if (key === 'f') {
    if (screen == 'start' || screen == 'game_over') // We added the game_over part, so when we press f on the game over screen, it will start a new game, the || means or, so if either of these are true, it will run the code inside the if statement.{
      variables_init() // New function we will make to reset all our variables, so when we start a new game, it starts from scratch, so our player's score doesn't carry over from the last game. We will make this function later, so don't worry about it for now.
      screen = 'run'
    }
    //changing position of our player 
    if (y == 305){
      y = 40; // If the player is on the floor, we want to move it to the ceiling, so we set y to 40, which is the y coordinate of the ceiling.
    }
    else{
      y = 305; // If the player is on the ceiling, we want to move it to the floor, so we set y to 305, which is the y coordinate of the floor.
    }
  }

}

```

# Making the variables_init() function

Now we are 90% done, we just have 3 things to add! Let's start by making our variables_init function, this function will reset all our variables to their original state, so when we start a new game, it starts from scratch. Add this code to your code:

```

function variables_init(){
  // This is by far the easiest function to understand, it just resets all our variables to their original state, so when we start a new game, it starts from scratch. This is what our variables were set to at the start of the game, so we just set them back to that.

  move = 1;
  y = 305;
  triangle_point = 500
  multiplier = 6;
  ceiling = false;
  score = 0;
}

```

# Collision Logic

Now we are ready to add our collide function to detect if our player hits the triangle, and if it does, we go to the game over screen. Add this code to your code:

```

function collide(){
  // Making some variables to make our code easier to read and understand.
  let x_collide = false;
  let same_side = false;
  
  // This checks if the triangle is on the same line as the player, if it is, we set same_side to true, else we set it to false.

  if (ceiling && y == 40){
      same_side = true;
  }
  else if (!ceiling && y == 305){
      same_side = true;
  }
  else{
      same_side = false;
  }
  
  // Now this is the hardest part of the if function, this logic took me quite a bit to make, so I don't fully expect you to understand it, but I'll try my best to explain it. This basically sees if the furthest point of the triangle is in the player or past it. Why do we check if it's past it and still say game over? Well the triangle continues even after it passes the player, so we make sure it's fully past the player, if it collides, we change our screen to game over, and the game ends. If you don't understand this, don't worry, just copy and paste it, and it will work.
  if (same_side){
    if (triangle_point-20-move > 200 && triangle_point-20-move < 249){
      screen = 'game_over'
    }
  }

    
}

```

# End screen

Now I'm not going to explain the end game screen function text, because it's the same logic as the start screen, with just different text.

```
function end_screen(){
  clear();

  background("black");
  textSize(24)
  fill('white')
  textAlign(CENTER, CENTER);
  text('You lost with a score of: '+ score, 300,200)
  text('Press f to start game again', 300, 227)
}

```

# Finishing touches

Now last piece of code! But before we add it just add our new collide function to our draw function, and after that we will add the last piece of code as shown below, I'll explain it through comments, so your draw function should look like this:

``` 
function draw() {

  if (screen == 'run'){
  
    //adding our collide function we just made
    collide();
    init();
    
    // New code we add
    move= move + 1 * multiplier // Like I said, the draw function runs 60 times a second, so this code makes the triangle move towards the player at a set speed, multiplied by the multiplier, which we will increase as the game goes on, so the game gets harder and harder. The more score you get, the faster the triangle moves towards you, making it harder to dodge.

    // This just checks if the triangle is close to the end of the screen
    if (triangle_point-move<50){
      ceiling = random([false,true]); // This randomly picks the ceiling, so the triangle randomly appears on the floor or ceiling
      triangle_point = random(340, 580); // Changes our starting position of the triangle to have a bit of variety
      move = 0; // resets the move variable, so the triangle starts from the right side of the screen again
      multiplier += .15; // Increases the multiplier, so the triangle moves faster and faster as the game goes on, making it harder to dodge
      score +=1; // Increases our score :)
      }
  }
  else if (screen == 'game_over'){
    end_screen()
  }
  else if (screen == 'start'){
    start_screen()
  }
    

}
  
```
# Final Code 

This is what your final code should look like:

```

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

  // Score text
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
  text('Press f to flip when game starts', 300, 227)
  
}



function variables_init(){
  move = 1;
  y = 305;
  triangle_point = 500
  multiplier = 6;
  ceiling = false;
  score = 0;
}
```
---

Now you finished making your own one key game! thank you for following along, I know I'm not the best at explaining things, but I hope you learned something new and had fun! 
