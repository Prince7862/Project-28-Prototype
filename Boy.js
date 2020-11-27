class Boy extends Parent {
    constructor(x,y,options){
        var options = {
            isStatic:false
        }
      super(x,y,150,200,options);
      this.image = loadImage("Sprites/boy.png");
    }
  
    display() {
      super.display();
    }
  }
  