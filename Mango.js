class Mango extends Parent {
  constructor(x,y,options){
      var options = {
          isStatic:true,
          restitution:0,
          friction:1,
          density:0
      }
    super(x,y,50,50,options);
    this.image = loadImage("Sprites/mango.png");
  }

  display() {
    super.display();
  }
}
