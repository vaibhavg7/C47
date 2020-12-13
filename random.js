//BUILDINGS - large in number
function Buildings(){
    if(frameCount%buildingframe===0){
        var building=createSprite(width+20, 550, 20, 20)
        building.velocityX=-3;
        bGroup.add(building);
        building.lifetime = 520;
    }
}

// ANIMALS - minimum
function Animals(){
    if(frameCount%animalframe===0){
        var animal=createSprite(width+20, 510, 20, 20)
        animal.velocityX=-6;
        animal.shapeColor="blue";
        aGroup.add(animal);
        animal.lifetime = 270;
        animal.addAnimation("run",animal_running);
        frameCount=frameCount+1;
    }
}


//CARS
function Cars(){
    if(frameCount%carframe===0){
        var car=createSprite(width+20, 480, 20, 20)
        car.velocityX=-8;
        car.shapeColor="red";
        cGroup.add(car);
        car.lifetime = 200;
    }

}
