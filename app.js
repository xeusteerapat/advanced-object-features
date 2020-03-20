let animal = {
  eats: true,
  walk() {
    console.log('Animal walk');
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
let longEar = {
  earLength: 10,
  __proto__: rabbit
};

rabbit.__proto__ = null;
rabbit.__proto__ = { name: 'Cat' };

console.log(animal);
console.log(rabbit);
