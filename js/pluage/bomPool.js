function Bom_Pool(num) {
    Pool.call(this, num)
    while (num-- > 0) {
        this.pool.push(new Bom())
    }
}
Bom_Pool.prototype = Object.create(Pool.prototype)
Bom_Pool.prototype.bom = function (mc) {
    let bom = this.once()
    if (!bom) {
        bom = new Bom()
        this.free.push(bom)
        this.freeNum++
        bom.inStage(true)
        this.mcInit(bom)
    }
    bom.x = mc.x
    bom.y = mc.y
}
Bom_Pool.prototype.mcInit = function (mc) {
    mc.life = 1
}