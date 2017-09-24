function Pool(num){
    this.pool = []
    this.free = []
    this.num = num
    this.freeNum = 0
    app.ticker.add(this.next, this)
}
Pool.prototype.next = function(){
    this.free.forEach(function(mc) {
        mc.life<=0?this.recove(mc):''
    }, this)
}

Pool.prototype.once = function(){
    if (this.num > 0) {
        this.num--
        this.freeNum ++
        let mc = this.pool.pop()
        this.free.push(mc)
        mc.inStage(true)
        this.mcInit(mc)
        return mc
    }else{
        return null
    }
}
Pool.prototype.mcInit = function(mc){
    //介面
}

Pool.prototype.recove = function(mc){
    mc.inStage(false)
    this.free.splice(this.free.indexOf(mc),1)
    this.pool.push(mc)
    this.num++
    this.freeNum--
}