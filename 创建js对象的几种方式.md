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

## 对象字面量模式
var person = {
    name: 'Jhonha',
    age: 22,
    job: 'dancer',
    sayName: function () {
      console.log(this.name);
    }
}
person2.sayName(); // dancer

-----------------------------

## 工厂模式
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
      console.log(this.name);
    };
    return o;
}
var person1 = createPerson('Jhonha', 22, 'dancer');
var person2 = createPerson('Ciris', 22, 'Software engineer');
console.log(person1.name); // Jhonha
console.log(person2.name); // Ciris

优点：解决了创建多个相似对象的问题，函数封装创建对象，
无需写重复创建对象的代码
缺点：没有解决对象识别的问题（怎么样知道一个对象类型） 那要怎么办，
让我们继续往下学习吧。

-----------------------------

## 构造函数模式
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    }
}
var person1 = createPerson('Jhonha', 22, 'dancer');
var person2 = createPerson('Ciris', 22, 'Software engineer');
console.log(person1.name); // Jhonha
console.log(person2.name); // Ciris

-----------------------------

## 原型模式
function Person(){}
Person.prototype = {
    constructor : Person,
    name: "Jhonha",
    age : 29 ,
    job: "Software Engineer",
    sayName: function(){
        return this.name;
    }
};
var person1 = new Person();
console.log(person1.name); // Jhonha
console.log(person1.age); // 29
console.log(person1.job); // Software Engineer
console.log(person1.sayName()); // Jhonha

-----------------------------

## 组合使用构造函数模式和原型模式
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Jhonha","Nick"]
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
}
var person1 = new Person('bob', 22, 'frontend');
var person2 = new Person('lynn', 22, 'doctor');

person1.friends.push("Van");
console.log(person1.friends); // Jhonha Nick Van
console.log(person2.friends); // Jhonha Nick
console.log(person1.name); // bob
console.log(person2.name); // lynn
console.log(person1.sayName === person2.sayName); // true

-----------------------------


-----------------------------
