//主角子彈
function NpcBb(npcBbTexture, po) {
    Mc.call(this, npcBbTexture)
    this.position = po ? po : { x: -100, y: -100 }
    this.life = 0
    this.d = 10
}
NpcBb.prototype = Object.create(Mc.prototype)
NpcBb.prototype.next = function() {
    Mc.prototype.next.call(this)
    if (this.life === 0) return
    borderOut(this) ? (this.life = 0) : ''
    if (this.life > 0) {
        hitTestDelLife(this, app.me)
    }
}
