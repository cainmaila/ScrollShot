function NPC_Pool(num) {
    Pool.call(this, num)
    while (num-- > 0) {
        this.pool.push(new Npc())
    }
}
NPC_Pool.prototype = Object.create(Pool.prototype)
NPC_Pool.prototype.mcInit = function(mc) {
    mc.x = ~~(Math.random() * app.stageW)
    mc.y = -10
    mc.life = 1
}

//隨機開火
NPC_Pool.prototype.randomFire = function() {
    var npc = this.free[~~(this.freeNum * Math.random())] //最新一隻
    app.npcBbPool.fire(npc)
}
