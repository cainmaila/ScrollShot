function NpcBbPool(num) {
    Pool.call(this, num)
    var npcBbTexture = NpcBbTexture()
    while (num-- > 0) {
        this.pool.push(new NpcBb(npcBbTexture))
    }
}
NpcBbPool.prototype = Object.create(Pool.prototype)
NpcBbPool.prototype.fire = function(npc) {
    let bb = this.once()
    if (bb) {
        bb.position = npc.position
        bb.life = 1
        //射擊路徑向量計算
        var dx = (app.me.x - npc.x) >> 8
        var dy = (app.me.y - npc.y) >> 8
        //避免某些子彈速度太慢
        dy = dy < 2 ? Math.random() * 1 + 2 : dy
        bb.v.x = dx
        bb.v.y = dy
        bb.inStage(true)
    }
}
