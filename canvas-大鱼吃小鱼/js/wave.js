function Wave() {
	this.x;
	this.y;
	this.r;
	this.R;
	this.alive;
	this.alpha;
	this.color;
}
Wave.prototype.init=function(r,R,color) {
	this.x=bigFish.x;
	this.y=bigFish.y;
	this.r=r;
	this.R=R;
	this.alive=true;
	this.alpha=this.r/this.R;
	this.color=color;
}
Wave.prototype.draw=function(){

	ctx1.save();
	ctx1.beginPath();
	ctx1.lineWidth=1;
	
	this.r=lerpDistance(this.R,this.r,0.03);
	this.alpha=1-this.r/this.R;
	this.color=colorRbga(this.color);
	ctx1.strokeStyle=this.color.replace(/(\d)\)/,this.alpha+")");
	if(this.r>=this.R-0.5) this.alive=false;
	if(this.alive){
			ctx1.arc(this.x,this.y,this.r,0,2*Math.PI,false);
			ctx1.closePath();
			ctx1.stroke();
	}
	ctx1.restore();
}
function ctrlWave() {
	for(var i=0;i<arr_wave.length;i++){
		if(arr_wave[i].alive){

			arr_wave[i].draw();
			
		}
		else{
			arr_wave.splice(i,1);
		}
	}
}