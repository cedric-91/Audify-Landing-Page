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



(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFC").ss(2).p("AgOhvQAcA0AAA7QAAA8gcA0");
	this.shape.setTransform(-11.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7CF43").ss(2).p("AgWidQAsBRAABMQAABNgsBR");
	this.shape_1.setTransform(-0.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFC").ss(2).p("AgajRQA0BiAABvQAABwg0Bi");
	this.shape_2.setTransform(10.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-22,28.4,44);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFC").ss(2).p("AgOhvQAcA0AAA7QAAA8gcA0");
	this.shape.setTransform(-11.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C7CF43").ss(2).p("AgWidQAsBRAABMQAABNgsBR");
	this.shape_1.setTransform(-0.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFC").ss(2).p("AgajRQA0BiAABvQAABwg0Bi");
	this.shape_2.setTransform(10.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-22,28.4,44);


// stage content:
(lib.enhanceanimation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// FlashAICB (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Am7F+IAAgBIAWgDQA+gPAagyQARggAAgoIAAgNQgBgcAGgRQAKgeAjglQA3g5AOhPQANhRgihCQgeg8g2gjQg/gphOAIIAAgCIRzAAIAAKng");
	var mask_graphics_23 = new cjs.Graphics().p("Am7F+IAAgBIAWgDQA+gPAagyQARggAAgoIAAgNQgBgcAGgRQAKgeAjglQA3g5AOhPQANhRgihCQgeg8g2gjQg/gphOAIIAAgCIRzAAIAAKng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:69.6,y:38.2}).wait(23).to({graphics:mask_graphics_23,x:69.6,y:38.2}).wait(1));

	// waves
	this.instance = new lib.Tween14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.5,40,0.242,0.242);

	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.2,42);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,scaleY:1,x:71.2,y:42},23,cjs.Ease.get(0.8)).wait(1));

	// ear
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFC").s().p("Ag9DIQgSgIgOgVQgIgLgEgLQgDgIADgIQAEgHAHgDQAIgDAIADQAHAEADAHQAKAXANAGQAHADAGgDQAVgIgKgcQgHgSAFgXQAHgcAcgUQATgNADgQQAEgQgMgXQgCgFgIgCQgHgDgIABQgGABgFADQgGAEgBAEQgEAVgMAMQgMAOgQADQghAFgagrQgOgZgBgfQgBggAMgcQAbg5BDgMQAigHAgAIQAgAHAXAVQAXAUAMAcQALAcgBAgQAAAIgGAGQgGAGgJgBQgIAAgGgGQgFgGAAgIQACgxghgcQgigeg2AKQgvAJgRAmQgJATABAWQABAVAJARQALATAHAAQACAAADgFQAEgGACgIQAEgRAOgMQAPgMAUgCQAVgDASAJQASAIAIARQAlBKhBAsQgRALgDAQQgBAIACAGQAEAIABAMQADAVgHAQQgJAWgYAKQgLAEgLAAQgLAAgLgFg");
	this.shape.setTransform(27.5,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7CF43").s().p("AhoE5QgbgVgPgcQgEgHACgIQADgIAHgEQAHgEAIACQAIADAEAHIAcAhQAiAdAogKQBJgTAAhPIAAgLQgBgiAHgXQANgoArgsQAugvAMhEQALhEgcg3QgYgwgsgeQhMgzhmAlQhRAegUBWQgKAsAHApQACAIgFAHQgFAHgIABQgIACgHgFQgHgFgBgIQgJgvANg2QAYhrBmglQBmgmBVApQBGAhAmBKQAiBDgOBRQgOBPg2A5QgjAlgLAeQgGARABAcIAAANQAAAogRAgQgaAyg9APQgOAEgPAAQgoAAgjgbg");
	this.shape_1.setTransform(27.6,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54,50.4,45.4,67.9);
// library properties:
lib.properties = {
	width: 98,
	height: 84,
	fps: 24,
	color: "#7546C4",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
