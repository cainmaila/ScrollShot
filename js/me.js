//操作主角
function Me() {
    Mc.call(this, "images/me.png")
    app.me = this
    this.x = app.stageW >> 1
    this.y = app.stageH >> 1
    this.isFire = true
    app.stage.addChild(this)
}
Me.prototype = Object.create(Mc.prototype)

Me.prototype.next = function (t) {
    Mc.prototype.next.call(this)
    borderChk(this)
    this.isFire ? this.fire(t) : ''
}
const BB_T = 4
let bb_t = BB_T
Me.prototype.fire = function (t) {
    bb_t -= t
    if (bb_t <= 0) {
        new BB(this.position)
        bb_t = BB_T
    }
}