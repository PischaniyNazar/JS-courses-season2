// Завдання 4
let user = {
    name: "Nazar",
    age: 22,
    occupation: "programming"
}
// Метод для отримання даних про об'єкт за допомогою дескриптору
Object.defineProperty(user, "information", {
    get: function() {
        return this.name + ' ' + this.age + ' ' + this.occupation;
      }
});

let businessCard = new User(user);
// Конструктор
function User(user){
    this.name = user.name;
    this.occupation = user.occupation;
    User.city = "Cherkassy";
}
// Статичний метод
User.showCity = function(){
    return this.city;
}

console.log(user.information);
console.log(businessCard);
console.log(User.showCity());