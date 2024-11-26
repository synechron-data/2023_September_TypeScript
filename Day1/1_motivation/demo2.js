console.log("Hello from Demo Two");

const Person = (function () {
    function Person(name) {
        this._name = name;
    }

    Person.prototype.getName = function () {
        return this._name.toUpperCase();
    }

    Person.prototype.setName = function (value) {
        this._name = value;
    }

    return Person;
})();

var p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("Subodh");
console.log(p2.getName());
p2.setName("Abhijeet");
console.log(p2.getName());

console.log(p1);
console.log(p2);

// 96 bytes (48 bytes/Instance)