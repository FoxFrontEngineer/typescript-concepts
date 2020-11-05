interface Dog {
    cat: false
}

interface myCat {
    cat: true,
    meow: string,
}

function showValue(p: Dog | myCat) {
    if (p.cat) {
        console.info(p.meow)
    }
}

// покажет ошибку, так как должен имплементить интерфейс Cat со всеми полями
//showValue({cat: true});

showValue({ cat: true, meow: 'meow'});

// "in" guard example - по уникальному свойству, без маркера

interface Square {
    size: number;
}

interface Circle {
    diameter: number;
    radius: number;
}

function showValue2(p: Square | Circle) {
    if ("radius" in p) {
        console.info(p.diameter)
    }
}

// по идее Error
// showValue2({radius: 1, size: 2});
showValue2({radius: 1, diameter: 2});