class Particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        this.body = Bodies.circle(x,y,this.r,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)

        var pos = this.body.position;
        var angle = this.body.angle;

        if(frameCount%60===0){
            Particle.push(new Particle(random(width/2-10,width/+10),10,10))
          }

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        //fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};