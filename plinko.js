class Plinko{
    constructor(x, y){
        var options = {
           isStatic: true,
           friction:0,
           restitution:1,

        }

 
        this.body = Bodies.circle(x, y, 10, options);
        this.r = 10;
        this.x = x;
        this.y = y;
        World.add(world, this.body);

    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
 };