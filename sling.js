class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length: 16
        }
        this.pointB = pointB
       
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push(); 
           
           stroke(255, 75, 75)
            if (pointA.x<220) {
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                rect(pointA.x-30,pointA.y-10,15,30); 
            } 
            else{
                strokeWeight(3);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
                rect(pointA.x-30,pointA.y-10,15,30);  
            }         
            pop();
        }
    }
    
}