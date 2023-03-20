'use strict';
const Person = function (name, year, weight) {
     this.name = name;
     this.year = year;
     this.weight = weight;
}

const gui = new Person('guilherme', 1996, 65.7)
Person.prototype.calcAge = function () {
     console.log(2023 - this.year);
}
Person.prototype.calcWeight = function () {
     console.log((this.weight * this.weight) / 1.45);
}
Person.prototype.size = 1.86;
console.log(Person.prototype);
console.log(gui.size);



const Animal = function(breed, color){
     this.breed = breed;
     this.color = color;
}

const dog = new Animal('no breed', 'black and white');
Animal.prototype.energy = 100;

console.log(dog);