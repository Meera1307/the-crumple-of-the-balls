class ball{

constructor(x,y){

 var options ={

    restitution:0.5,
    friction:1.0,
    density:0.8
 }   
this.body = Bodies.circle(x,y,40,options);
this.radius = 40;
this.ball = loadImage("images/paper.png");



World.add(world,this.body);
}  
display(){

   

var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);

rotate(angle);

imageMode(RADIUS);

image(this.ball,0,0,this.radius,this.radius);
pop();

}




}