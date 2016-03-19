window.onload = gameControler;
var can1,can2,ctx1,ctx2,mainbg=new Image(),arr_fruit=[],arr_fish=[],bigFish,lastTime,deltaTime,score,bigFishBody=[],arr_wave=[],
	typeNum={3:0,4:0,5:0,6:0};
function gameControler() {
	init();
	gameLoop();

}
function init(){
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext("2d");
	cw=can1.width;
	ch=can1.height;
	mx=cw/2;
	my=ch/2;
	can1.addEventListener("mousemove",OnMouseMove,false);
	mainbg.src="src/background.jpg";
	ctrlScore()
	ctrlFruit();
	ctrlBigFish()
	ctrlFish();
	lastTime=Date.now();
	for (var i = 0; i<8; i++) {
		var img = new Image();
		img.src = "./src/bigSwim"+i+".png";
		bigFishBody.push(img);
	}
}
function gameLoop(){
	window.requestAnimationFrame(gameLoop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40) deltaTime=40;
	drawBigFish();
	ctx2.clearRect(0,0,cw,ch);
	drawBg();
	drawFruit();
	drawFish();
	fishCollision();
	fruitCollision();
	ctrlWave();
}
function drawBg(){
	ctx2.save();
	ctx2.drawImage(mainbg,0,0,cw,ch);
	ctx2.beginPath();
	ctx2.fillStyle="#fff";
	ctx2.font="bold 20px Verdana";
	ctx2.textAlign="center";
	ctx2.shadowBlur=5;
	ctx2.shadowColor="#fff";
	ctx2.closePath();
	ctx2.fillText("score:"+score.score,cw/2,50);
	if(score.isOver){
			ctx2.fillText("Game Over",cw/2,ch/2);
	}
	ctx2.restore();
}
function OnMouseMove(e){
	if(!score.isOver){
		if(e.offsetX||e.layerX){
			mx=e.offsetX==undefined?e.layerX:e.offsetX;
			my=e.offsetY==undefined?e.layerY:e.offsetY;
		}
	}
}
