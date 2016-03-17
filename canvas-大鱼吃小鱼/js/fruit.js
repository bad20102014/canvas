function Fruit(){
	this.x;
	this.y;
	this.size;
	this.alive;
	this.vx;
	this.vy;
	this.level;
	this.pic=new Image();
}
Fruit.prototype.init=function(){
	this.x=Math.random()*cw;
	this.y=Math.random()*ch;
	this.vy=Math.random()*0.5;
	this.vx=Math.pow(-1,Math.ceil(Math.random()*1000))*Math.random()*0.5;
	this.level=Math.round(Math.random()+1);
	this.size=0;
	this.alive=true;
	this.pic.src=this.level==1?"./src/fruit.png":"./src/blue.png";
}
Fruit.prototype.draw=function(){
	if(this.size<7){
		this.size+=0.01*deltaTime;
	}
	else{
		this.x+=this.level*this.vx*0.1*deltaTime;
		this.y+=this.level*this.vy*0.1*deltaTime;
		if(this.x>cw||this.x<0||this.y>ch||this.y<0){
			this.alive=false;
			return false;
		}
	}
	ctx2.drawImage(this.pic,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
}
Fruit.prototype.die=function(){
	this.alive=false;
}
function ctrlFruit(){
	var num=10;
	for (var i = 0; i < num; i++) {
		var tmpfruit=new Fruit();
		tmpfruit.init();
		arr_fruit.push(tmpfruit);
	}
}
function drawFruit(){
	
	for (var i = 0; i < arr_fruit.length; i++) {
		if(arr_fruit[i].alive){
			arr_fruit[i].draw();
		}else{
			arr_fruit[i].init();
		}
	}
}