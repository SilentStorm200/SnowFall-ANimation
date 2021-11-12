class Snow{
    constructor(x,r){
        this.x=x
        this.r=r
        this.y=-10
    }
    display(){
        noStroke()
        fill("white")
        ellipse(this.x,this.y,this.r)
    }
    move(){
        this.y=this.y+3
    }
}