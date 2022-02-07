let data;
let input, sendBttn;
let answer = "Enter questions in the chat box!";
let pfp;
function preload() {
  data = loadJSON("chatbot.json");
  pfp = loadImage("images/IMG-1253.jpg");
}
function setup() {
  createCanvas(800, 800);
  console.log(data);

  //decorations

  //input field and button
  input = createInput();
  input.position(330, 320);
  sendBttn = createButton("SEND MESSAGE");
  sendBttn.position(340, 350);

  //if the button is pressed
  sendBttn.mousePressed(chat);
}

function chat() {
  let inputStr = input.value().toLowerCase();
  console.log(inputStr);
  //loop through the entire brain array
  //once we find a match, break out of the loop
  //if we don't find a match, respond with a catchall response
  loop1: for (let i = 0; i < data.brain.length; i++) {
    loop2: for (let j = 0; j < data.brain[i].triggers.length; j++) {
      //checks if user input equals any of the triggers
      if (inputStr.indexOf(data.brain[i].triggers[j]) !== -1) {
        //we have a match
        answer = random(data.brain[i].responses);
        break loop1;
      } else {
        answer = random(data.catchall);
      }
    }
  }
}

function draw() {
  background(220);
  fill('#EE7EF2');
  textSize(40);
  textStyle(BOLD);
  textFont("Georgia");
  text("All About Ava", 258, 60);

  image(pfp, 300, 80, 200, 200);
  fill(0,0,0);
  textSize(20);
  textStyle(NORMAL);
  text(answer, 250, 450, 350);
}
