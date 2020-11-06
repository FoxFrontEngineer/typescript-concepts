enum Directions {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}

Directions.Up; // 2
Directions.Down; // 4
Directions.Left; // 6
Directions.Right; // 7, так как индекс зависит от предыдущего элемента

// reverse enum
Directions[2]; // Up

// Чтобы enum был в сгенерированном коде и сохранял ресурсы
const enum links {
    youtube = "https://youtube.com",
    facebook = "https://facebook.com"
}

// код генерируется только при обращении к enum
const arr = [links.youtube, links.facebook]