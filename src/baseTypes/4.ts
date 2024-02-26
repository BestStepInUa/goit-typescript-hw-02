/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

let person: [string, number] = ['Max', 21];

// OR
// let person: [string, number];
// person = ['Max', 21];

// OR
// type personType = [string, number];
// let person: personType = ['Max', 21];

export {};
