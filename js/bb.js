//主角子彈
function BB(po) {
    Mc.call(this, "images/bb.png")
    this.position = po ? po : { x: -100, y: -100 }
    this.v.y = -10
}
BB.prototype = Object.create(Mc.prototype)
BB.prototype.next = function () {
    Mc.prototype.next.call(this)
    bbOut(this) ? app.bb_pool.recove(this) : ''
}