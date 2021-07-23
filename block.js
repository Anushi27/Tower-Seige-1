class Block {
    constructor(x, y, color,image) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, 40, 60, options);
        this.width = 40;
        this.height = 60;
        this.color = color;
        //this.image = image.jpg
        //this.image = image
        
        World.add(world, this.body);
    }
    display() {
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            fill(this.color);
            strokeWeight(1.2);
            rect(0, 0, this.width, this.height);
            pop();
        }
       
    
}