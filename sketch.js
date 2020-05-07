var hypnoticBall, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('car/position');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  //background("white");
  
    if(keyDown(LEFT_ARROW)){
      hypnoticBall2 = createSprite(hypnoticBall.x,hypnoticBall.y,10,10);
      hypnoticBall2.shapeColor = "red";
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      hypnoticBall2 = createSprite(hypnoticBall.x,hypnoticBall.y,10,10);
      hypnoticBall2.shapeColor = "red";
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      hypnoticBall2 = createSprite(hypnoticBall.x,hypnoticBall.y,10,10);
      hypnoticBall2.shapeColor = "red";
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      hypnoticBall2 = createSprite(hypnoticBall.x,hypnoticBall.y,10,10);
      hypnoticBall2.shapeColor = "red";
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('car/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
