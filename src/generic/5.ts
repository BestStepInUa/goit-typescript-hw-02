/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

const isLogin: KeyValuePair<string, boolean> = { key: 'isLogin', value: false };
console.log(isLogin);

const userRole: KeyValuePair<string, string> = { key: 'role', value: 'ADMIN' };
console.log(userRole);

export {};
