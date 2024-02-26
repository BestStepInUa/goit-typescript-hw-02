/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, K extends AllType>(
  top: Pick<T, keyof AllType>,
  bottom: Pick<K, keyof AllType>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const top: Pick<AllType, keyof AllType> = {
  name: 'top',
  color: 'green',
  position: 0,
  weight: 0,
};

const bottom: Pick<AllType, keyof AllType> = {
  name: '',
  color: '',
  position: 50,
  weight: 100,
};

// Якщо ми хочемо мати змогу передавати в об”єкті тільки ті властивості типу AllType які потрібні у функції- рішення наступне

// type TopType = Pick<AllType, 'name' | 'color'>;
// type BottomType = Pick<AllType, 'position' | 'weight'>;

// function compare<T extends TopType, U extends BottomType>(top: T, bottom: U): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// const top: TopType = {
//   name: 'top',
//   color: 'green',
// };

// const bottom: BottomType = {
//   position: 50,
//   weight: 100,
// };

const result: AllType = compare(top, bottom);
console.log(result);

export {};
