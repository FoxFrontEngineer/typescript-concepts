class UserClass {
  public name: string;
  private nickName: string;
  protected age: number;
  readonly pass: number;

  constructor(name: string, age: number, nickName: string, pass: number) {
    this.name = name;
    this.age = age;
    this.nickName = nickName
    this.pass= pass
  }
}

const john = new UserClass('John', 31, 'webDev', 123);

// - public - модификатор доступа по умолчанию. К свойству или методу
// можно получить свободный доступ. Например из инстанса класса

// - private - не может быть доступен за пределами класса, работа с ним происходит
// только внутри класса. Ни классы наследники, ни инстансы

// - protected - доступ могут получить только наследники, инстансы (экземпляры) класса не имеют доступа

// - readonly - только для чтения, изменять нельзя

// минимизация кода в классе

class UserClassMin {
  constructor(
    public name: string,
    protected age: number,
    private nickName: string,
    readonly pass: number,
  ) {}
}

const andre = new UserClassMin('John', 31, 'webDev', 123);

/* про аксессоры */
class UserWithAccessor {
  private age: number = 20;
  constructor(public name: string) {}

  //метод
  setAge(age: number) {
    this.age = age;
  }

  //сеттер
  set myAge(age: number) {
    this.age = age;
  }
}

const user4 = new UserWithAccessor('User4')
user4.setAge(30);
user4.myAge = 31;