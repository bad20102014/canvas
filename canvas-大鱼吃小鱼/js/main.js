window.onload = gameControler;
var can1,can2,ctx1,ctx2,mainbg=new Image(),arr_fruit=[],arr_fish=[],bigFish,lastTime,deltaTime,score;
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
	score=0;
	mx=cw/2;
	my=ch/2;
	can1.addEventListener("mousemove",OnMouseMove,false);
	mainbg.src="src/background.jpg";
	ctrlFruit();
	ctrlBigFish()
	ctrlFish();
	lastTime=Date.now();
}
function gameLoop(){
	window.requestAnimationFrame(gameLoop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	drawBigFish();
	ctx2.clearRect(0,0,cw,ch);
	drawBg();
	drawFruit();
	drawFish();
}
function drawBg(){
	ctx2.drawImage(mainbg,0,0,cw,ch);
	ctx2.beginPath();
	ctx2.fillStyle="#000";
	ctx2.font="bold 20px SimSun";
	ctx2.textAlign="center";
	ctx2.closePath();
	ctx2.fillText("score:"+score,cw/2,50);
}
function OnMouseMove(e){
	if(e.offsetX||e.layerX){
		mx=e.offsetX==undefined?e.layerX:e.offsetX;
		my=e.offsetY==undefined?e.layerY:e.offsetY;
	}
	for (var i = 0; i < arr_fruit.length; i++) {
		if(arr_fruit[i].alive)
		{
			if(Distance(arr_fruit[i].x,arr_fruit[i].y,mx,my)<15){
				arr_fruit[i].die();
				score+=arr_fruit[i].level;
			}
		}
	}
	for (var i = 0; i < arr_fish.length; i++) {
		if(arr_fish[i].alive)
		{
			if(Distance(arr_fish[i].x/2,arr_fish[i].y/2,mx,my)<30){
				arr_fish[i].die();
				score+=arr_fish[i].level;
			}
		}
	}
}