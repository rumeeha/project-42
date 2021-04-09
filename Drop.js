
class Drop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}



























// class Drop{

// constructor(x,y){
//     var options={
//         restitution:0.1,
//         friction:0.001,
//         }

//         this.x=x;
// 		this.y=y;
// 		this.r=10;
// 		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
// 		World.add(world, this.body);

// }

// display()
// {
        
//         var paperpos=this.body.position;	
//         push()
    
//         rectMode(CENTER)
//         strokeWeight(3);
//         fill(255,0,255)
//         ellipse(0,0,this.r, this.r);
//         pop()
        
// }







// }