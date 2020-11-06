const msg = "hello";

const error = (msg: string):never => {
    throw new Error(msg);
}

const infiniteLoop = (): never => {
    while (true) {

    }
}