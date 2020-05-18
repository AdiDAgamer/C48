class Target
{
    constructor(x, y)
    {
        var options =
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.3
        }
        
        this.body = Bodies.rectangle(x, y, 20, 50, options)
        this.width = 20;
        this.height = 80;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke(0, 255, 0);
        fill(0, 0, 255);
        //rectMode(CENTER);
        //rect(0, 0, this.width, this.height);
        ellipseMode(CENTER);
        ellipse(0, 0, this.height, this.height);
        pop();
    }
}