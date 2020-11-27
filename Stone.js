class Stone extends Parentclass {
    constructor(x,y,options){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
      super(x,y,50,50,options);
      this.image = loadImage("Sprites/stone.png");
    }
  
    display() {
      super.display();
    }
  }
  