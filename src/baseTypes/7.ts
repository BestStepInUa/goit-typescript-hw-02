/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Sunday = 'true',
  Monday = 'false',
  Tuesday = 'false',
  Wednesday = 'false',
  Thursday = 'false',
  Friday = 'false',
  Saturday = 'true',
}

function isWeekend(day: WeekDays): boolean {
  if (day === 'true') {
    return true;
  }
  return false;
}

// OR
// enum WeekDays {
//   Sunday,
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
// }

// function isWeekend(day: WeekDays): boolean {
//   const isWeekendDay = [WeekDays.Sunday, WeekDays.Saturday];
//   return isWeekendDay.includes(day);
// }

// const isWeekend = (day: WeekDays): boolean => {
//   const weekendDaysArr = [WeekDays.Sunday, WeekDays.Saturday];
//   return weekendDaysArr.includes(day);
// };

const today = WeekDays.Monday;
console.log(`Is today Weekend?: ${isWeekend(today)}`);

const yesterday = WeekDays.Monday;
console.log(`Was yesterday Weekend?: ${isWeekend(yesterday)}`);

export {};
