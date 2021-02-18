var gameState = 0;
var wealthCount = 0;
var thief;
var thiefImg, goldCoinImg, policeImg;
var object, objArray;
var objIndex = 0;

function preload()
{
  thiefImg = loadImage("thief.png");
  goldCoinImg = loadImage("goldCoin.png");
  policeImg = loadImage("policeWoman.png");
}

function setup()
{
  createCanvas(displayWidth, displayHeight);

  thief = createSprite(displayWidth/10, displayHeight/2);
  thief.addImage(thiefImg);
  thief.scale = 0.2;
  thief.visible = false;
  objArray = new Array();
}

function draw()
{
  background(255);
  if(gameState === 0)
  {
    background("lightblue");
    fill("maroon");
    textSize(20);
    textFont("Lucida Calligraphy");
    text("This is the JEWEL THIEF game's prototype.", displayWidth/2, displayHeight/2 - 50);
    text("The instructions of the game will be given later on this page.", displayWidth/2, displayHeight/2);
    text("Press 'SPACE' to start the game.", displayWidth/2, displayHeight/2 + 50);
  }

  if(keyDown("space"))
  {
    gameState = 1;
  }

  if(gameState === 1)
  {
    text("Wealth collected: Rs. " + wealthCount, displayWidth/2 - 200, displayHeight/10);
    if(keyWentDown("up")) thief.y = thief.y - 50;
    if(keyWentDown("down")) thief.y = thief.y + 50;
    thief.visible = true;

    if(frameCount % 30 === 0)
    {
      var r = Math.round(random(1, 2));
      object = new Objects(displayWidth, random(displayHeight/10, displayHeight - 50), r, objIndex);
      objArray[objIndex] = object;
      object.display();
      objIndex = objIndex + 1;
    }

    for(var i = 0; i < objArray.length; i++)
    {
      if(objArray[i].sprite.isTouching(thief))
      {
        if(objArray[i].objNum === 1)
        {
          wealthCount = wealthCount + 100;
        }
        else if(objArray[i].objNum === 2)
        {
          thief.destroy();
          gameState = 2;
        }
        objArray[i].sprite.destroy();
      }
    }
  }

  if(gameState === 2)
  {
    background("pink");
    for(var i = 0; i < objArray.length; i++)
    {
      if(objArray.sprite != null) objArray[i].sprite.destroy();
    }
    fill("maroon");
    textSize(20);
    textFont("Lucida Calligraphy");
    text("GAME OVER !! You have been caught by the police.", displayWidth/2, displayHeight/2);
    text("The thief has robbed wealth worth " + wealthCount + " Rupees !!", displayWidth/2, displayHeight/2 + 100);
  }
  drawSprites();
}