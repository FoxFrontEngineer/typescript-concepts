// получает конструктор класса
const logClass = (constructor: Function) => {
  console.info(constructor);
}

// target - получает класс внутри которого декоратор, PropertyKey - название/имя свойства
const logProperty = (target: Object, propertyKey: string|symbol) => {
  console.info(propertyKey)
}

const logMethod = (
  target: Object,
  propertyKey: string|symbol,
  descriptor: PropertyDescriptor
) => {
  console.info(descriptor)
}

const logSet = (
  target: Object,
  propertyKey: string|symbol,
  descriptor: PropertyDescriptor
) => {
  console.info(descriptor)
}


@logClass
class UserExampleClass {

  @logProperty
  secret: number;

  constructor(public name: string, public age: number, secret: number) {
    this.secret = secret;
  }

  @logMethod
  public getPass(): string {
    return `${this.name}${this.age}`
  }

  @logSet
  set myAge(age: number) {
    this.age = age;
  }

}

// 4 вида декораторов
// 1 - класса
// 2 - свойства
// 3 - метода
// 4 - аксцессора


// Фабрика декораторов

function factory(value: any) {
  return function(target: any) {
    console.info(target)
  }
}

const enumerable = (value: boolean) => {
  return (
    target: Object,
    propertyKey: string|symbol,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.enumerable = value;
  }
}


class UserExampleClassFabricDecorator {

  constructor(public name: string, public age: number, ) {
  }

  @enumerable(false)
  public getPass(): string {
    return `${this.name}${this.age}`
  }

}


// compose decorator
// second выполнятся первым, а first - вторым
// при этом вызов фабрики будет идти по порядку
const first = () => {
  console.info("first() completting");
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.info("first() called");
  }
}

const second = () => {
  console.info("second() completting");
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.info("second() called");
  }
}

class UserDecoratorSteps {

  constructor(public name: string, public age: number, ) {
  }

  @first()
  @second()
  public getPass(): string {
    return `${this.name}${this.age}`
  }

}