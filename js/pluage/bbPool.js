function BB_Pool(num) {
    Pool.call(this,num)
    while (num-- > 0) {
        this.pool.push(new BB())
    }
}
BB_Pool.prototype = Object.create(Pool.prototype)
BB_Pool.prototype.fire = function (me) {
    let bb = this.once() 
    if (bb) {
        bb.position = me.position
        bb.inStage(true)
    }
}