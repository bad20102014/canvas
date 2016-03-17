function BigFish() {
	this.x;
	this.y;
	this.fishEye=new Image();
	this.fishBody=new Image();
	this.fishTail=new Image();
	this.angle;
}
BigFish.prototype.init=function(){
	this.x=cw*0.5;
	this.y=ch*0.5;
	this.angle=0;
	this.fishEye.src="./src/bigEye0.png";
	this.fishBody.src="./src/bigSwim0.png";
	this.fishTail.src="./src/bigTail0.png";

}
BigFish.prototype.draw=function(){
	ctx1.clearRect(0,0,cw,ch);
	this.x=lerpDistance(mx,this.x,0.3);
	this.y=lerpDistance(my,this.y,0.3);
	var deltaX=mx-this.x;
	var deltaY=my-this.y;
	var aimAngle=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(aimAngle,this.angle,0.9);
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.fishEye,-this.fishEye.width*0.5,-this.fishEye.height*0.5);
	ctx1.drawImage(this.fishBody,-this.fishBody.width*0.5,-this.fishBody.height*0.5);
	ctx1.drawImage(this.fishTail,-this.fishTail.width*0.5+30,-this.fishTail.height*0.5);
	ctx1.restore();
}
function ctrlBigFish(){
	bigFish = new BigFish();
	bigFish.init();
}
function drawBigFish(){

	bigFish.draw();
}