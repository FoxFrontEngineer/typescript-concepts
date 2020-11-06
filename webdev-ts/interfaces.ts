// может наследоваться и расширяться другими интерфейсами
interface UserInterface {
  // защита от модификации - readonly
  readonly name: string,
  // пометили свойство age как не обязательное
  age?: number
  // расширение интерфейса через строковый индекс
  [propName: string]: any;
}

// alias для собственного типа, кастомный тип
type UserNewType = {
  name: string,
  age: number
}

const myYauhen: UserInterface = {
  name: 'Yauhen'
}
myYauhen.age = 30;
// будет ошибка, так как свойство защищено как readonly
// myYauhen.name = "New";

// пример с лишним свойством, которое не соответствует интерфейсу
const myYauhen2: UserInterface = {
  name: 'Yauhen',
  age: 29,
  nickName: "Superman"
}

/* создание класса с реализацией интерфейса */
interface Iitem {
  name: string,
  age: number,
}

interface Admin extends Iitem {
  getPass(): string
}

interface Ilogger {
  logger(): string
}

class ItemClass implements Admin {
  name: string = 'John';
  age: number = 29;
  nickName: string = "webDev";
  getPass() {
    return `${this.name}${this.age}`
  }
  logger() {
    return `${this.nickName}`
  }
}