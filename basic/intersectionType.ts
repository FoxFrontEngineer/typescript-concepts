type Foo = { foo: string }
type Bar = { bar: string }

let fooBar: Foo & Bar;
// ошибка, так как типы должны быть реализованы оба
// fooBar = { foo: " " }
fooBar = { foo: "foo", bar: "bar"}


const object1:object = { age: 15 }
const object2:object = { name: "User" }

const test = Object.assign({}, object1, object2);