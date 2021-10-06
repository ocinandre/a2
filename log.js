class log {
    constructor(x,y,height,angle){
        var options ={
            'density':1.0,
            'friction':1.0,
            'restitution':0.8, 
        };
        this.body = Bodies.rectangle(x, y,20,this.height, options);
        this.width = 20;
        this.height = this.height;
        Matter.Body.setAngle(this.body,angle)
        World.add(world, this.body);
    };
    display(){
     var pos =this.body.position;

     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     strokeWeight(4);
     stroke("green")
     rectMode(CENTER);
     fill('white');
     rect(0, 0, this.width, this.height);
     pop();
   }
 }
 