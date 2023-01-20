// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal
class Animal {
    constructor(name, move) {
        this.name = name;
        this.move = move;
    }
    sayName() {
        console.log(`My name is ${this.name}. I can ${this.move}`)
    }
}
class Cat extends Animal {
    constructor(name, move) {
        super(name, move)
    }
    movements() {
        console.log(`${this.name} can jumping now`);
    }
}
const cat = new Cat("Tom", "jump");
cat.sayName();
cat.movements();