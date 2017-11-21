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
    // this.constructor(c)
}

NewClass.prototype.b = function(c) {
    console.log('NewClass b val = ' + (c + 5))
}

NewClass.prototype = Object.create(MyClass.prototype)
// NewClass.prototype = new MyClass(3)
// NewClass.prototype.constructor = MyClass.constructor

var newObj = new NewClass(1)

console.log(newObj.a)
newObj.b(2)
