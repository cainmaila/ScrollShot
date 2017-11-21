function NpcBbPool(num) {
    Pool.call(this, num)
    var npcBbTexture = NpcBbTexture()
    while (num-- > 0) {
        this.pool.push(new NpcBb(npcBbTexture))
    }
}
NpcBbPool.prototype = Object.create(Pool.prototype)
NpcBbPool.prototype.fire = function(mc) {
    let bb = this.once()
    if (bb) {
        bb.position = mc.position
        bb.life = 1
        bb.inStage(true)
    }
}
