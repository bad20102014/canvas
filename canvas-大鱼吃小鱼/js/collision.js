function  fruitCollision() {
	if(!score.isOver){
		for (var i = 0; i < arr_fruit.length; i++) {
			if(arr_fruit[i].alive)
			{
				if(Distance(arr_fruit[i].x,arr_fruit[i].y,bigFish.x,bigFish.y)<15){
					arr_fruit[i].die();
					score.addScore(arr_fruit[i].level);
					if(score.score>score.level*score.level*1000){
						score.levelUp();
					}
					var wave = new Wave();

					wave.init(5,15,"#eee");

					arr_wave.push(wave);

				}
			}
	    }
	}
}
function fishCollision() {
	
	if(!score.isOver){
		for (var i = 0; i < arr_fish.length; i++) {
			if(arr_fish[i].alive)
			{
				if(Distance(arr_fish[i].x/2,arr_fish[i].y/2,bigFish.x,bigFish.y)<30){
					if(score.level>arr_fish[i].level){
						arr_fish[i].die();
						score.addScore(arr_fish[i].level);
						if(score.score>score.level*score.level*1000){
							score.levelUp();
							ctrlFish();
						}
					var wave = new Wave();

					wave.init(5,20,"#F72C2C");

					arr_wave.push(wave);
					}else{
						score.gameOver();
					}
				}
			}
		}
	}
}