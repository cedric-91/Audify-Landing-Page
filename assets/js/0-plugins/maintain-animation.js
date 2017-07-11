(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {};
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {
	for(var i = 0; i < cacheList.length; i++) {
		if(cacheList[i].cacheCanvas)
			cacheList[i].updateCache();
	}
};

lib.addElementsToCache = function (textInst, cacheList) {
	var cur = textInst;
	while(cur != exportRoot) {
		if(cacheList.indexOf(cur) != -1)
			break;
		cur = cur.parent;
	}
	if(cur != exportRoot) {
		var cur2 = textInst;
		var index = cacheList.indexOf(cur);
		while(cur2 != cur) {
			cacheList.splice(index, 0, cur2);
			cur2 = cur2.parent;
			index++;
		}
	}
	else {
		cur = textInst;
		while(cur != exportRoot) {
			cacheList.push(cur);
			cur = cur.parent;
		}
	}
};

lib.gfontAvailable = function(family, totalGoogleCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

	loadedGoogleCount++;
	if(loadedGoogleCount == totalGoogleCount) {
		lib.updateListCache(gFontsUpdateCacheList);
	}
};

lib.tfontAvailable = function(family, totalTypekitCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

	loadedTypekitCount++;
	if(loadedTypekitCount == totalTypekitCount) {
		lib.updateListCache(tFontsUpdateCacheList);
	}
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFC").ss(2).p("AhjhjIDHDH");
	this.shape.setTransform(26.8,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7CF43").ss(2).p("Ai8hGIB1h2IA7AMIAABGIC8C8QAOAOAAAVQAAAVgOAOIgYAYQgOAOgVAAQgVAAgOgOIi8i8IhHAAg");
	this.shape_1.setTransform(23.9,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7CF43").ss(2).p("ACRDAIixiyIg7gLIheiNIAvgvICMBeIAMA7ICyCx");
	this.shape_2.setTransform(-23.5,-21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C7CF43").ss(2).p("AgUhDIBRBRIgwAvIhQhR");
	this.shape_3.setTransform(7.2,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFC").ss(2).p("ADyjxIniHi");
	this.shape_4.setTransform(-8.5,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFC").ss(2).p("AALAMIgWgX");
	this.shape_5.setTransform(-36.2,34.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C7CF43").ss(2).p("AGflBIheBeQgFAFgHAAQgHAAgFgFIhGhHQgFgFAAgGQAAgHAFgFIBeheQgtgYgrAGQgqAHgjAiIgjAkQgyAxAnBpIoRIRQgPAOAAAVQAAAVAPAOIAXAYQAPAOAVAAQAUAAAPgOIIRoRQBlAmAzgzIAkgjQAigjAHgpQAHgsgZgtg");
	this.shape_6.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-48.7,93.6,95.1);


(lib.maintainicon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.maintainicon2, new cjs.Rectangle(-44.4,-48.7,93.6,95.1), null);


// stage content:
(lib.maintainanimation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.maintainicon2();
	this.instance.parent = this;
	this.instance.setTransform(67.3,63.8,1,1,0,0,0,2.3,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,rotation:360,x:65,y:65},24,cjs.Ease.get(-0.9)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.6,81.3,93.6,95.1);
// library properties:
lib.properties = {
	width: 130,
	height: 130,
	fps: 24,
	color: "#CC00FF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
