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
	this.alpha;
}
Fish.prototype.init=function(){

	this.level=Math.round(Math.random()*3)+3;
	this.direction=Math.round(Math.random()+1);
	this.x=this.direction==1?cw-20:20;
	this.x=this.x*2
	this.vx=this.direction==1?-Math.random()*0.5-0.4:Math.random()*0.5+0.4;
	this.vx=this.vx*2;
	this.y=Math.random()*ch*2;
	this.alive=true;
	this.pic.src="./src/fish"+this.level+this.direction+".png";
	this.alpha=Math.random()*0.5;
}
Fish.prototype.born=function(){
	this.direction=Math.round(Math.random()+1);
	this.x=this.direction==1?cw-20:20;
	this.x=this.x*2
	this.vx=this.direction==1?-Math.random()*0.5-0.4:Math.random()*0.5+0.4;
	this.vx=this.vx*2;
	this.y=Math.random()*ch*2;
	this.alive=true;
	this.pic.src="./src/fish"+this.level+this.direction+".png";
}
Fish.prototype.setLevel=function (level) {
	this.level=level;
	this.pic.src="./src/fish"+this.level+this.direction+".png";
}
Fish.prototype.draw=function(){
	if(this.alpha<=1){
		this.alpha+=0.0003*deltaTime;
	}else{
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
}
Fish.prototype.die=function(){
	this.alive=false;
}
function ctrlFish(){
	var num=10;
	loop:
  	for (var i = arr_fish.length; i < num; i++) {
		var tmpfish=new Fish();
		tmpfish.init();
		if(typeNum[3]<num*2/5){
			tmpfish.setLevel(3);
			arr_fish.push(tmpfish);
		}
		else if(typeNum[4]<num*1/5&&typeNum[3]>=num*2/5){
			tmpfish.setLevel(4);
			arr_fish.push(tmpfish);
		}
		else if(typeNum[5]<num*1/5&&typeNum[4]>=num*1/5){
			tmpfish.setLevel(5);
			arr_fish.push(tmpfish);
		}
		else if(typeNum[6]<num*1/5&&typeNum[5]>=num*1/5){
			tmpfish.setLevel(6);
			arr_fish.push(tmpfish);
		}else{
			continue loop;
		}
		console.log(tmpfish.level)
		if(typeNum.hasOwnProperty(tmpfish.level)){
			typeNum[tmpfish.level]+=1;
		}else{
			typeNum[tmpfish.level]=1;
		}
	}

}
function addFish(){
		var num=score.level*score.level+5;
loop:
  	for (var i = arr_fish.length; i < num; i++) {
		var tmpfish=new Fish();
		tmpfish.init();
		if(typeNum[3]<num*2/5){
			tmpfish.setLevel(3);
			arr_fish.push(tmpfish);
		}
		else if(typeNum[4]<num*1/5&&typeNum[3]>=num*2/5){
			tmpfish.setLevel(4);
			arr_fish.push(tmpfish);
		}
		else if(typeNum[5]<num*1/5&&typeNum[4]>=num*1/5){
			tmpfish.setLevel(5);
			arr_fish.push(tmpfish);
		}
		else if(typeNum[6]<num*1/5&&typeNum[5]>=num*1/5){
			tmpfish.setLevel(6);
			arr_fish.push(tmpfish);
		}else{
			continue loop;
		}
		if(typeNum.hasOwnProperty(tmpfish.level)){
			typeNum[tmpfish.level]+=1;
		}else{
			typeNum[tmpfish.level]=1;
		}
	}
}
function drawFish(){
	
	for (var i = 0; i < arr_fish.length; i++) {
		if(arr_fish[i].alive){
			arr_fish[i].draw();
		}else{
			arr_fish[i].born();
		}
	}
}