class dustbin{

constructor(x,y,width,height){

 var options ={
  isStatic : true
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

this.dustbin = loadImage("images/dustbin.png");

World.add(world,this.body);
}
display(){



 var pos = this.body.position;
 
imageMode(CENTER);
image(this.dustbin,pos.x,pos.y,this.width,this.height); 
}
}