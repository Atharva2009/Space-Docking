var iss, spacecraft;
var issImage, spacecraftImage, spacecraftImage1, spacecraftImage2, spacecraftImage3, backgroundImage;
var hasDocked = false;

function preload(){
    issImage = loadImage("iss.png")
    spacecraftImage = loadImage("spacecraft1.png")
    spacecraftImage1 = loadImage("spacecraft2.png")
    spacecraftImage2 = loadImage("spacecraft3.png")
    spacecraftImage3 = loadImage("spacecraft4.png")
    backgroundImage = loadImage("spacebg.jpg")
}

function setup(){
    createCanvas(400,400)

    iss = createSprite(330,130)
    iss.addImage(issImage)
    iss.scale=0.25

    spacecraft = createSprite(330,130)
    spacecraft.addImage(spacecraftImage)
    spacecraft.scale = 0.15
}

function draw(){
    background(backgroundImage)
    
    if(!hasDocked){
        spacecraft.x = spacecraft.x + random(-1,1);

        if(keyDown("UP_ARROW")){
            spacecraft.y = spacecraft.y -2
            spacecraft.addImage(spacecraftImage1)
        }

        if(keyDown("DOWN_ARROW")){
            spacecraft.y = spacecraft.y +2
            spacecraft.addImage(spacecraftImage)
        }

        if(keyDown("LEFT_ARROW")){
            spacecraft.x = spacecraft.x -2
            spacecraft.addImage(spacecraftImage2)
        }

        if(keyDown("RIGHT_ARROW")){
            spacecraft.x = spacecraft.x +2
            spacecraft.addImage(spacecraftImage3)
        }
    }
    if (spacecraft.isTouching(200,200)){
        hasDocked = true;
        text("DOCKED SUCCESSFULLY!!!",200,300)
    }
}