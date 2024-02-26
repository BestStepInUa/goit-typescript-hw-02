/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

const adminRoleDescription = RoleDescription[UserRole.admin];
console.log(adminRoleDescription);

const editorRoleDescription = RoleDescription[UserRole.editor];
console.log(editorRoleDescription);

const guestRoleDescription = RoleDescription[UserRole.guest];
console.log(guestRoleDescription);

// OR
// Зі створенням окремого типу
// type UserRoleStatus = Record<UserRole, string>;

// const RoleDescription: UserRoleStatus = {
//   [UserRole.admin]: 'Admin User',
//   [UserRole.editor]: 'Editor User',
//   [UserRole.guest]: 'Guest User',
// };

export {};
