/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, K extends object>(objA: T, objB: K): T & K {
  return Object.assign(objA, objB);
}

const result = merge([1, 2], [3, 4, 5]);
console.log(result);

export {};
