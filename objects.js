class Objects
{
  constructor(x, y, objNum, objIndex)
  {
    this.x = x;
    this.y = y;
    this.objNum = objNum;
    this.objIndex = objIndex;
    this.sprite = null;
  }

  display()
  {
    this.sprite = createSprite(this.x, this.y, 20, 20);
    if(this.objNum === 1) 
    {
      this.sprite.addImage(goldCoinImg);
      this.sprite.scale = 0.08;
    }  
    if(this.objNum === 2) 
    {
      this.sprite.addImage(policeImg);
      this.sprite.scale = 0.2;
    }
    
    this.sprite.velocityX = -15;
  }
};