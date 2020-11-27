class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 0.5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if(this.sling.bodyA){
                var pointa = this.sling.bodyA.position
                var pointb = this.sling.pointB
                line(pointa.x,pointa.y,pointb.x,pointb.y)
                }
            
        }
    }
    
}