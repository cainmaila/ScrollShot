//操作主角
function Me() {
    Mc.call(this, "images/me.png")
}
Me.prototype = Object.create(Mc.prototype)
Me.prototype.next = function () {
    Mc.prototype.next.call(this)
    borderChk(this)
}