const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = 0
var b;
var target2Const, tarhet3Const, target4Const;
var ground1, ground2, ground3;
var bowImg;

function preload()
{
    backgroundImg = loadImage("Animations/download.jpg");
    bowImg = loadImage("Animations/download (1) (1).png");
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    //body = new Body(390,300,10,80)
    target2 = new Target(1200,300,20,100)
    target3 = new Target(1100,150,20,100)
    target4 = new Target(1100,450,20,100)

    arrow = new Arrow(300,300,100,70)
    slingShot = new SlingShot(arrow.body,{x:350,y:300});

    ground1 = new Ground(1200, 400, 40, 10);
    ground2 = new Ground(1100, 250, 40, 10);
    ground3 = new Ground(1100, 550, 40, 10);


    //target2Const = new SlingShot(target2.body, {x: 1100, y: 0});
    //target3Const = new SlingShot(target3.body, {x: 1200, y: 0});
    //target4Const = new SlingShot(target4.body, {x: 1000, y: 0});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    slingShot.display();   
    //body.display(); 
    target2.display();
    target3.display();
    target4.display();
    arrow.display();
    //target2Const.display();
    //target3Const.display();
    //target4Const.display();

    image(bowImg, 290, 270, 120, 100);

    //arrow.deapth = target2.deapth;

    //console.log(arrow.body.deapth);

    /*if(target2.x > 1370 && target3.x > 1370 && target4.x > 1370)
    {
        World.remove(target2.body, world);
        World.remove(target3.body, world);
        World.remove(target4.body, world);

        target2 = new Target(1200, 300);
        target3 = new Target(1100, 150);
        target4 = new Target(1100, 450);
    }*/
    
}
function mouseDragged(){
    Matter.Body.setStatic(arrow.body,false);
    Matter.Body.setPosition(arrow.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly()

}

function keyPressed()
{
    if(keyCode === 32)
    {
        World.remove(world, arrow.body);
        arrow = new Arrow(300,300,100,50);
        slingShot.attach(arrow.body);
    }
}

function collide(bodyA, bodyB)
{
    if(bodyB.x - bodyA.x < bodyA.width/2 + bodyB.width/2)
    {
        console.log("You hit the target");
    }
}
