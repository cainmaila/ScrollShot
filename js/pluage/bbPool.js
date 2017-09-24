function BB_Pool(num) {
    this.pool = []
    this.num = num
    while (num-- > 0) {
        this.pool.push(new BB())
    }
}

BB_Pool.prototype.fire = function (me) {
    if (this.num > 0) {
        this.num--
        let bb = this.pool.pop()
        bb.position = me.position
        bb.inStage(true)
    }
}

BB_Pool.prototype.recove = function (bb) {
    bb.inStage(false)
    this.pool.push(bb)
    this.num++
}
