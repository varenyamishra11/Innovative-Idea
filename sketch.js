var slingshot,ground1,ground2,ground3,polygon1;

var box24, box1,box2,box3,box4,box5,box6,box7,box8,box9, 
box25,box10,box11,box12,box13,box14,box23,box15,box16,box17, 
box22,box18,box19,box20,box21;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  polygon1 = new Polygon(50,100,30,30);
  ground1= new Ground(600,690,width,30);
  ground2= new Ground(1000,400,290,30);
  ground3= new Ground(600,500,350,30);


  slingshot = new SlingShot(polygon1.body,{x:50, y:150});
  
  box1= new Box(895+20,70,40,60);
  box2= new Box(935+20,70,40,60);
	box3= new Box(975+20,70,40,60);
  box4= new Box(1035,70,40,60); 
  box5= new Box(1055+20,70,40,60);
	box6= new Box(935+20,50,40,60);
	box7= new Box(975+20,50,40,60);
  box8= new Box(1035,50,40,60);
  box9= new Box(975+20,30,40,60);
  
  box10= new Box(485,90,40,60);
  box11= new Box(525,90,40,60);
  box12= new Box(565,90,40,60);
  box13= new Box(605,90,40,60);
  box14= new Box(645,90,40,60);
  box15= new Box(685,90,40,60);
  box16= new Box(725,90,40,60);

  box17= new Box(525,70,40,60);
  box18= new Box(565,70,40,60);
  box19= new Box(605,70,40,60);
  box20= new Box(645,70,40,60);
  box21= new Box(685,70,40,60);

  box22= new Box(565,50,40,60);
  box23= new Box(605,50,40,60);
  box24= new Box(645,50,40,60);
  
  box25= new Box(605,30,40,60);
  
  
  
  
	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(234, 242, 0);
  slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();




  
  

  ground1.display();
  ground2.display();
  ground3.display();
  polygon1.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

