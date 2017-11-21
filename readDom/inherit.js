/**
 * 物件繼承
 */

var MyClass = function(a) {
    this.a = 'a val = ' + a
}

MyClass.prototype.b = function(val) {
    console.log('MyClass b val = ' + val)
}

var NewClass = function(c) {
    MyClass.call(this, c)
    // this.__proto__.constructor(c)
    // this.constructor(c)
}
NewClass.prototype = Object.create(MyClass.prototype)
// NewClass.constructor = MyClass.constructor
NewClass.prototype.b = function(c) {
    console.log('NewClass b val = ' + (c + 5))
}

var newObj = new NewClass(1)

console.log(newObj.a)
newObj.b(2)

// class A {
//     constructor(a) {
//         this.a = a
//     }
//     b() {
//         console.log('b', this.a)
//     }
// }

// class B extends A {
//     constructor(a) {
//         super(a)
//     }
//     b() {
//         console.log('b2', this.a)
//     }
// }

// new B(123)
