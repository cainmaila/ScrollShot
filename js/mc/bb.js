//主角子彈
function BB(po) {
    Mc.call(this, 'images/bb.png')
    this.position = po ? po : { x: -100, y: -100 }
    this.v.y = -10
    this.life = 0
    this.d = 10
}
BB.prototype = Object.create(Mc.prototype)
BB.prototype.next = function() {
    Mc.prototype.next.call(this)
    if (this.life === 0) return
    bbOut(this) ? (this.life = 0) : ''
    if (this.life > 0) {
        hitNpcTest(this)
    }
}
