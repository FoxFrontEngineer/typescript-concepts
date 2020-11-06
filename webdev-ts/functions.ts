const createPassword = (name: string = 'Max', age: number | string = 29) => `${name}${age}`;
createPassword('John', 30);
createPassword('John', '31');
createPassword();

// будет ошибка по аргументу, так как функция не принимает тип null
// createPassword(null);

const createSimplePassword = (name: string, age?: number) => `${name}${age}`;
// age?: - пометили аргумент age как не обязательный
createSimplePassword('Andre');



const createSkills = (name:string, ...skills: string[]): string => `${name}, my skills are ${skills.join()}`;
//также тип для skills можно указать через generic: Array<string>

createSkills('Jack', 'JS', 'ES6', 'React');

// пример - присвоение функции переменной через стрелочную функцию
let myFunc: (arg: string) => void;
function oldFunc(name: string):void {
  alert(`Hello ${name}, nice to see you!`);
}
myFunc = oldFunc;
myFunc('Max')