class Arrow{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          //isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x = x;
      this.width = width;
      this.height = height;
      this.image = loadImage("Animations/images.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;

     
      push();
      //translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
            strokeWeight(2);
      stroke(255, 0, 0);
      fill(255, 255, 0);
      rectMode(CENTER);
      //rect( this.body.position.x, this.body.position.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
}