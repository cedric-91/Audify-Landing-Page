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



(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFC").ss(2).p("AjjgcIAAAUQAZAQAjAGQAZAFApAAIDLAAQApAAAZgFQAjgGAZgQIAAgU");
	this.shape.setTransform(0,-16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7CF43").ss(2).p("AkvhLIAAA8QAAAmBVAaQBXAbCDAAQCEAABXgbQBVgaAAgmIAAg8g");
	this.shape_1.setTransform(0,-12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7CF43").ss(2).p("AFoh6IAABeIg4AAIAAAWQAAAdg2AYQAQAbAAAeIAABwQAAAogZAfIhdB0QgQAUgYAMQgXALgaAAIh1AAQgaAAgYgLQgXgMgQgUIhdh0QgZgeAAgpIAAhwQAAgfAQgaQg2gYAAgdIAAgWIg5AAIAAheIAmAAIAAgmQAAhGAwg7QAug6BNgfIAAgdIBMAAIAAgmICXAAIAAAmIBMAAIAAAdQBNAfAuA6QAwA7AABGIAAAmg");
	this.shape_2.setTransform(0,-13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C7CF43").ss(2).p("Ag/BjIAAg5QAAgZANgRQAIgKAbgTIBUg9");
	this.shape_3.setTransform(-27.7,38.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFC").ss(2).p("AhzhQIDiCEIAAAm");
	this.shape_4.setTransform(-14.9,48.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFC").ss(2).p("AB0hQIjjCEIAAAm");
	this.shape_5.setTransform(15,48.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C7CF43").ss(2).p("ABABtIAAhMQAAgagMgPQgJgLgbgTIhUg9");
	this.shape_6.setTransform(27.8,39.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C7CF43").ss(2).p("AAAhxIAADj");
	this.shape_7.setTransform(19,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C7CF43").ss(2).p("AAAByIAAjj");
	this.shape_8.setTransform(-18.9,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-58.9,76.8,117.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFC").ss(2).p("AjjgcIAAAUQAZAQAjAGQAZAFApAAIDLAAQApAAAZgFQAjgGAZgQIAAgU");
	this.shape.setTransform(0,-16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7CF43").ss(2).p("AkvhLIAAA8QAAAmBVAaQBXAbCDAAQCEAABXgbQBVgaAAgmIAAg8g");
	this.shape_1.setTransform(0,-12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C7CF43").ss(2).p("AFoh6IAABeIg4AAIAAAWQAAAdg2AYQAQAbAAAeIAABwQAAAogZAfIhdB0QgQAUgYAMQgXALgaAAIh1AAQgaAAgYgLQgXgMgQgUIhdh0QgZgeAAgpIAAhwQAAgfAQgaQg2gYAAgdIAAgWIg5AAIAAheIAmAAIAAgmQAAhGAwg7QAug6BNgfIAAgdIBMAAIAAgmICXAAIAAAmIBMAAIAAAdQBNAfAuA6QAwA7AABGIAAAmg");
	this.shape_2.setTransform(0,-13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C7CF43").ss(2).p("Ag/BjIAAg5QAAgZANgRQAIgKAbgTIBUg9");
	this.shape_3.setTransform(-27.7,38.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFC").ss(2).p("AhzhQIDiCEIAAAm");
	this.shape_4.setTransform(-14.9,48.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFC").ss(2).p("AB0hQIjjCEIAAAm");
	this.shape_5.setTransform(15,48.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C7CF43").ss(2).p("ABABtIAAhMQAAgagMgPQgJgLgbgTIhUg9");
	this.shape_6.setTransform(27.8,39.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C7CF43").ss(2).p("AAAhxIAADj");
	this.shape_7.setTransform(19,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C7CF43").ss(2).p("AAAByIAAjj");
	this.shape_8.setTransform(-18.9,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-58.9,76.8,117.8);


// stage content:
(lib.protectanimation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(75,75);

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,75,0.033,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:0.03},7).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({scaleX:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(113,91.1,76.8,117.8);
// library properties:
lib.properties = {
	width: 150,
	height: 150,
	fps: 24,
	color: "#7546C4",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
