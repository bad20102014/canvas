window.requestAnimationFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();


function Distance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}


function randomColor() {
	var col = [0, 1, 2];
	col[0] = Math.random() * 255 ;
	col[0] = col[0].toFixed();
	col[1] = Math.random() * 255 ;
	col[1] = col[1].toFixed();
	col[2] = Math.random() * 255 ;
	col[2] = col[2].toFixed();
	return "rgba(" + col[0] + "," + col[1] + "," + col[2] + ",";
}


function lerpAngle(a, b, t) {
	var d = a - b;
	if (d > Math.PI) d = d - 2 * Math.PI;
	if (d < -Math.PI) d = d + 2 * Math.PI;
	return b + d * t;
}

function lerpDistance(aim, cur, ratio) {
	var delta = aim - cur;
	return cur + delta * ratio;
}
