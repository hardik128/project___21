class Bob {
    constructor(x,y,r){
      var options={
         //isStatic: true,
         restitution:1,
         friction:0,
         density:1
      }
      
      this.body=Bodies.circle(x,y,r,options)
      this.x=x;
      this.y=y;
      this.r=r*1.4;
      World.add(world,this.body)
    }
    display(){
      var bobpos=this.body.position
      push()
      translate(bobpos.x,bobpos.y)
      ellipseMode(CENTER)
      fill(255)
      ellipse(0,0,this.r*1.4,this.r*1.4)
      pop();
    }
}