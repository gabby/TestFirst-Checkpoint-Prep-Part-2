function Mammal(name){
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function(){
	return "My name is " + this.name + "!";
}

Mammal.prototype.haveBaby = function(){
	let newBaby = new Mammal("Baby " + this.name);
	this.offspring.push(newBaby);
 	return newBaby;
};

function Cat(name, color){
	Mammal.call(this, name);
	this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat; 

Cat.prototype.haveBaby = function(color){
	let newKitty = new Cat("Baby "+this.name, color);
	this.offspring.push(newKitty);
	return newKitty;
}
