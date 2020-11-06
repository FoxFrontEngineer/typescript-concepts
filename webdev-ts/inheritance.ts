class UserWithStatic {

  private nickName: string = 'webDev';
  // статичное свойство
  static secret = 12345;

  constructor(public name: string, public age: number) {}

  getPass():string {
    return `${this.name}${UserWithStatic.secret}`
  }
}

// const testUser1 = new UserWithStatic('Andrew', 30)
// testUser1.getPass(); //Andrew12345
// console.info(UserWithStatic.secret)

class NewClass extends UserWithStatic {
  name: string = 'Andrew';

  constructor(age: number) {
    super(name, age);
  }

  getPass():string {
    return `${this.age}${this.name}${UserWithStatic.secret}`
  }
}

const max = new UserWithStatic('Max', 20);
const kolya = new NewClass(31);
kolya.getPass();

// от абстрактного класса напрямую не создать экземпляр класса (instance)
// абстрактный класс включает в себя определение свойств и методов

abstract class AbstractUser {
  constructor(public name: string, public age: number) {}

  greet():void {
    console.info(this.name)
  }

  // абстрактный метод - нужно реализовывать в потомках
  abstract getPass(): string;
}

class Yauhen extends AbstractUser {
  name: string = 'Yauhen';

  constructor(age: number) {
    super(name, age);
  }

  getPass():string {
    return `${this.age}${this.name}`
  }
}

const yauhen = new Yauhen(26);
yauhen.greet(); //'Yauhen'
yauhen.getPass(); // 26Yauhen