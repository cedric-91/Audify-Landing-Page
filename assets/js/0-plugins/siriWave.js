function SiriWave(opt){
	this.opt = opt || {};

	this.K = 2;
	this.F = 6;
	this.speed = this.opt.speed || 0.01;
	this.noise = this.opt.noise || 0;
	this.phase = this.opt.phase || 0;

	if (!devicePixelRatio) devicePixelRatio = 1;
	this.width = devicePixelRatio * (this.opt.width || 400);
	this.height = devicePixelRatio * (this.opt.height || 100);
	this.MAX = (this.height/2)-4;
	var home = document.getElementById("home")
	this.canvas = document.createElement('canvas');
	this.canvas.width = this.width;
	this.canvas.height = this.height;
	this.canvas.style.width = (this.width/devicePixelRatio)+'px';
	this.canvas.style.height = (this.height/devicePixelRatio)+'px';
	(this.opt.container || document.body).appendChild(this.canvas);
	this.ctx = this.canvas.getContext('2d');

	this.run = false;
}

SiriWave.prototype = {

	_globalAttenuationFn: function(x){
		return Math.pow(this.K*4/(this.K*4+Math.pow(x,4)),this.K*2);
	},

	_drawLine: function(attenuation, color, width){
		this.ctx.moveTo(0,0);
		this.ctx.beginPath();
		this.ctx.strokeStyle = color;
		this.ctx.lineWidth = width || 5;
		var x, y;
		for (var i=-this.K; i<=this.K; i+=0.01) {
			x = this.width*((i+this.K)/(this.K*3.5));
			y = this.height/2 + this.noise * this._globalAttenuationFn(i) * (1/attenuation) * Math.sin(this.F*i-this.phase);
			this.ctx.lineTo(x, y);
		}
		this.ctx.stroke();
	},

	_clear: function(){
		this.ctx.globalCompositeOperation = 'destination-out';
		this.ctx.fillRect(0, 0, this.width, this.height);
		this.ctx.globalCompositeOperation = 'source-over';
	},

	_draw: function(){
		if (!this.run) return;

		this.phase = (this.phase+this.speed)%(Math.PI*32);
		this._clear();
		this._drawLine(-2, 'rgba(255,255,255,0.1)');
		this._drawLine(-6, 'rgba(255,255,255,0.2)');
		this._drawLine(4, 'rgba(255,255,255,0.4)');
		this._drawLine(2, 'rgba(255,255,255,0.6)');
		this._drawLine(1, 'rgba(255,255,255,1)', 1.5);

		requestAnimationFrame(this._draw.bind(this), 9);
	},

	start: function(){
		this.phase = 1;
		this.run = true;
		this._draw();
	},

	stop: function(){
		this.run = false;
		this._clear();
	},

	setNoise: function(v){
		this.noise = Math.min(v, 2)*this.MAX;
	},

	setSpeed: function(v){
		this.speed = v;
	},

	set: function(noise, speed) {
		this.setNoise(noise);
		this.setSpeed(speed);
	}

};

var SW = new SiriWave({
  width: 4000,
  height: 600,
  container: document.getElementById('siri')
});
SW.setSpeed(0.05);
SW.setNoise(0.5);
SW.start();

/*var range = document.getElementById('range');
range.addEventListener('input', function(){
  SW.setNoise(+range.value);
});

var speed = document.getElementById('speed');
speed.addEventListener('input', function(){
  SW.setSpeed(+speed.value);
});

var F = document.getElementById('f');
F.addEventListener('input', function(){
  SW.F = +F.value;
});*/
