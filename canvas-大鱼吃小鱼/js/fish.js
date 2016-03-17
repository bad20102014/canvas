function Fish(){
	this.x;
	this.y;
	this.alive;
	this.vx;
	this.vy;
	this.deep;
	this.level;
	this.direction;
	this.pic=new Image();
}
Fish.prototype.init=function(){
	this.x=Math.random()*cw;
	this.vy=Math.random()*0.5;

	this.level=Math.round(Math.random()*2)+1;
	this.direction=Math.round(Math.random()+1);
	this.vx=this.direction==1?-Math.random()*0.5:Math.random()*0.5;
	this.vx=this.vx*2;
	this.deep=ch*(this.level)/6*2;
	this.y=this.deep+Math.pow(-1,Math.ceil(Math.random()*1000))*Math.random()*150;
	this.alive=true;
	this.pic.src="./src/fish"+this.level+this.direction+".png";
}
Fish.prototype.draw=function(){
	
		this.x+=this.vx*0.1*deltaTime;
		if(this.x/2>cw||this.x<0||this.y/2>ch||this.y<0){
			this.alive=false;
			return false;
		}
		ctx2.save();
		ctx2.scale(0.5,0.5);
	ctx2.drawImage(this.pic,this.x-this.pic.width/2,this.y-this.pic.height/2);
	ctx2.restore();
}
Fish.prototype.die=function(){
	this.alive=false;
}
function ctrlFish(){
	var num=10;
	for (var i = 0; i < num; i++) {
		var tmpfish=new Fish();
		tmpfish.init();
		arr_fish.push(tmpfish);
	}
}
function drawFish(){
	
	for (var i = 0; i < arr_fish.length; i++) {
		if(arr_fish[i].alive){
			arr_fish[i].draw();
		}else{
			arr_fish[i].init();
		}
	}
}