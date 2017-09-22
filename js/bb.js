//主角子彈
function BB(po) {
    Mc.call(this, "images/bb.png")
    this.position = po
    this.v.y = -10
    app.stage.addChild(this)
}
BB.prototype = Object.create(Mc.prototype)
BB.prototype.next = function () {
    Mc.prototype.next.call(this)
    bbOut(this) ? this.die() : ''
}