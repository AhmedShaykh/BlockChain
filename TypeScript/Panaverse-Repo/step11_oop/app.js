class Data {
    name;
    constructor(name) {
        this.name = name;
    }
}
;
const show = new Data("Learning OOP In TypeScript");
console.log(show.name);
// ============= Abstraction ============= //
class Character {
    name;
    damage;
    attackSpeed;
    constructor(name, damage, speed) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }
}
class Goblin extends Character {
    constructor(name, damage, speed) {
        super(name, damage, speed);
    }
    damagePerSecond() {
        return this.damage * this.attackSpeed;
    }
}
const abstractData = new Goblin("Martin", 89, 78);
console.log(abstractData.name);
console.log(abstractData.damagePerSecond());
// ============= Encapsulation ============= //
class Person {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
// ============= Inheritance ============= //
class User {
    name;
    damage;
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    talk() {
        console.log('Says something ...');
    }
}
class Orc extends User {
    weapon;
    constructor(name, damage, weapon) {
        super(name, damage);
        this.weapon = weapon;
    }
    attack() {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}
// ============= Polymorphism ============= //
class Username {
    name;
    damage;
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    talk() {
        console.log('Says something ...');
    }
    attack() {
        console.log(`Attacks his target with his fists.`);
    }
}
class id extends Username {
    weapon;
    constructor(name, damage, weapon) {
        super(name, damage);
        this.weapon = weapon;
    }
    talk() {
        console.log('Says something but in orcish ...');
    }
    attack() {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}
export {};
