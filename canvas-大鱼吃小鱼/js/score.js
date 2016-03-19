function Score(){
	this.score=0;
	this.level=3;
	this.isOver=false;
}
Score.prototype.addScore=function(level){
	this.score+=level*100;
}
Score.prototype.levelUp=function(){
	if(this.level<10){
			this.level+=1;
	}

}
Score.prototype.gameOver=function(){
	this.isOver=true;
}
function ctrlScore(){
	score = new Score();
}