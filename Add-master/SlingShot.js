class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.25,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null
    }

    attach(body)
    {
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        //stroke(0,0,0)
        //strokeWeight(0);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        //noStroke();
        stroke(0);
        strokeWeight(3);
        //line(body.x, body.y - body.height, arrow.x - arrow.width, arrow.y);
        //line(body.x, body.y + body.height, arrow.x - arrow.width, arrow.y);
    }
}
}
