function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}


class Person {
  constructor(private name: string, private age: number, private job: string) {}

  @Log
  public getBio() {
    return `${this.name} is a ${this.age} years old ${this.job}`;
  }
}

// creates a new person
let man = new Person("Lawrence", 20, "developer");

console.log(man.getBio());
