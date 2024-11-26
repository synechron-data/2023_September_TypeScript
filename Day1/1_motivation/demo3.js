console.log("Hello from Demo Three");
class Person {
    _name;
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name.toUpperCase();
    }
    setName(name) {
        this._name = name;
    }
}
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
// 96 Bytes (48 / Instance)
