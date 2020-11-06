// ES6 syntax
const getterES6 = <T>(data: T): T => data;

// ES5 syntax
function getterES5<T>(data: T): T {
  return data;
}

// будет ошибка при доступе к свойству lenth у number значения
// getterES6(10).length;
getterES6('test').length

// можем указать явно возвращаемое значение в generic type
getterES6<string>('test').length;

// Class with generic

class UserClassGeneric<T, K extends number> {

  constructor(public name: T, public age: K) {}

  public getPass(): string {
    return `${this.name}${this.age}`
  }

  public getSecret(): number {
    return this.age**2;
  }

}

// Будет работать, если без констрейнтов UserClassGeneric<T, K>
// const genericUser = new UserClassGeneric('Igor', '15');
const genericUser = new UserClassGeneric('Igor', 15);
const genericUser2 = new UserClassGeneric(123, 123);