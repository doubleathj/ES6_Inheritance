"use strict";

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} + "make a noise"`);
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  speak() {
    console.log(this.name + "멍멍");
  }

  age() {
    console.log(this.name + "this.age");
  }
}

let a = new Dog();
