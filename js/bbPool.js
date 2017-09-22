function BB_Pool(num) {
    this.pool = []
    while (num-- > 0) {
        this.pool.push(new BB())
    }
}

BB_Pool.prototype.fire = function (me) {
    if (this.pool.length > 0) {
        let bb = this.pool.pop()
        bb.position = me.position
        bb.inStage(true)
    }
}

BB_Pool.prototype.recove = function (bb) {
    bb.inStage(false)
    this.pool.push(bb)
}
