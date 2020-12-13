//MONEY - score
function Money(){
    if(frameCount%300===0){
        var money=createSprite(width+20, 550, 20, 20)
        money.velocityX=-3;
        money.shapeColor="green";
        money.lifetime = 500;
        moneyGroup.add(money);
    }
}

//SHIELD - one obstacle / 10 seconds
function Shield(){
    if(frameCount%1500===0){
        var sheild=createSprite(width+20, 550, 20, 20)
        sheild.velocityX=-3;
        shield.shapeColor="yellow";
        shield.lifetime = 500;
        shieldgroup.add(shield);
    }
}

//GET OUT OF JAIL CARD