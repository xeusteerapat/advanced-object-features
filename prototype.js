let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit('White Rabbit'); // equivalent to rabbit.__proto__ = animal

console.log(rabbit.eats);
