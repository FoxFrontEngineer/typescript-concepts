/*
// Не валидный кейс, так как объект any, мы можем его переопределить на строку
let user: any = {
  name: "John",
  age: 30
}

user = "test";
*/

/* let user: { name: string, age: number } = {
  name: "Vladilen",
  age: 30
} */

// уже не сработает, так как user это статически описанный объект со свойствами
// также, если мы сменим одно из свойств на не правильный тип - будет ошибка
// также мы не сможем просто так взять и добавить новое свойство, например nickName,
// Typescript ругнется, что нет описания для нового поля в объекте
//user = "test"
// user.nickName = 'test'


// ниже в примере нарушаем принцип DRY - повторяемся в описании типов объектов
// для исправления этого создадим свой кастомный тип через alias

type PersonType = {name: string, age: number, nickName?: string, getPass?:() => string};

let user: PersonType = {
  name: 'User1',
  age: 30,
  nickName: "MadUser"
}

let admin: PersonType = {
  name: 'User1',
  age: 30,
  nickName: "MadAdmin"
}

let user2: PersonType = {
  name: 'User2',
  age: 32,
  getPass(): string {
    return `${this.name}${this.age}`
  }
}