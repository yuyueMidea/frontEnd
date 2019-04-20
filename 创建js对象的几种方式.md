## Object构造函数模式
 var person = new Object();
person.name = "Jhonha";
person.age = '27';
person.job = 'dancer';
person1.sayName = function () {
  console.log(this.name);
}
person1.sayName(); // Jhonha
console.log(person1.age); // 27

--------------------------------

