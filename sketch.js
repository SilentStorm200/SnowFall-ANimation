var snow=[]

function preload(){
  bg=loadImage("snow1.jpg")
  bi=loadImage("naruto.png")
}

function setup() {
  createCanvas(800,400)
b1=createSprite(130,300,20,20)
b1.addImage(bi)
b1.scale=0.2
}

function draw() {
  background(bg);
  
  
    
    for(var i=0;i<snow.length;i++){
      snow[i].display()
      snow[i].move()
    }

  snow.push(new Snow(random(0,800),random(1,6)))
  if(snow.length>200){
    snow.splice()
  }
  drawSprites();
} 
