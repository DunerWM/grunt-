var person = {};
person.must = "breath";
var man = {};
man.prototype = person;
man.sex = "male";
man.body = "strong";
man.hair = "shot";
man.skin = "black";
man.setName = function(name) {
	this.Name = name;
};
man.getName = function(){
	return this.name;
};
man.work = function(price) {
	this.missin = price;
};
var like = "sports";
var succ = "yeap";
var future = "unbknow";
man.hoby = function(play) {
	return "play"+play;
};
var hobyArr = ['baskateball', 'football'];