type UserGenerics = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
function createOrUpdateUser(_initialValues: Partial<UserGenerics>) {
    // Оновлення користувача
}
  
createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
});