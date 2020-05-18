class Body{
  constructor(x,y,width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          isStatic:true
      }
   
      this.body = Bodies.rectangle(x,y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
     
      World.add(world, this.body);
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push()
     strokeWeight(2)
     stroke("black")
     fill(0, 255, 0)
     //translate(this.body.position.x,this.body.position.y)
     //rotate(angle)
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
    pop()
    }
}