class Ball{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{restitution:0.8});
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        World.add(world, this.body);
    }

    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //noStroke();
        fill("#8D6E63");
        ellipse(0,0,this.w, this.h);
        pop();
    }
}