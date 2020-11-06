// Readonly<T>

interface IUser {
  name: string;
}

const Ruser: Readonly<IUser> = {
  name: "Igor",
};

// будет ошибка, так как использовали Readonly
// Ruser.name = "Another"

// Required<T>

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // Ok

// Required делает обязательными все поля
const obj2: Required<Props> = { a: 5, b: "Need Property b" };

// Record<K, T>
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
  home: { title: "home" },
  about: { title: "about" },
  contact: { title: "contact" },
};

// Pick<T, K>
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: true,
};

// Omit<T, K>
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = Omit<Todo, "description">;

const todo2: TodoPreview2 = {
  title: "Clean room",
  completed: false,
};

// Exclude<T, U>
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c";
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c";
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// Extract<T, U>
type T3 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T4 = Extract<string | number | (() => void), Function>; // () => void

// NonNullable<T>
type T5 = NonNullable<string | number | undefined>; // string | number
type T6 = NonNullable<string[] | null | undefined>; // string[]

// ReturnType<T>
declare function f1(): { a: number; b: string };

type R0 = ReturnType<() => string>; // string
type R1 = ReturnType<(s: string) => void>; // void
type R2 = ReturnType<<T>() => T>; // {}
type R3 = ReturnType<<T extends X, X extends number[]>() => T>; // number[]
type R4 = ReturnType<typeof f1>; // {a: number, b:string}
type R5 = ReturnType<any>; // any
type R6 = ReturnType<never>; // any

// будут ошибки, так как пытаемся определить тип примитива
// type R7 = ReturnType<string>; // any
// type R8 = ReturnType<Function>; // any

// InstanceType<T>
class C {
  x = 0;
  y = 0;
}

type C0 = InstanceType<typeof C>; // C
type C1 = InstanceType<any>; // any
type C2 = InstanceType<never>; // any
// type C3 = InstanceType<string> // Error
// type C4 = InstanceType<Function> // Error
