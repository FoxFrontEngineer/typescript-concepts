// Create and Export namespace

namespace Utils {
  // делаем доступной переменную SECRET вне namespace Utils
  export const SECRET: string = '12345';
  const PI: number = 3.14;
}

const mySecret = Utils.SECRET;

/*
Для доступа из другого файла используется специальный импорт
/// <reference path="Utils.ts" />

const mySecretInOtherFile = Utils.SECRET;
*/