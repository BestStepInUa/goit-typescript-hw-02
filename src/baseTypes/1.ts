// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: unknown; // OR let notInitialize: any;
let callback = (a: number | string): number | string => {
  if (typeof a === 'string') {
    return `100 +${a}`;
  }
  return 100 + a;
};

export {};
