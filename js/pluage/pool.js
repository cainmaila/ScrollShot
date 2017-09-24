function Pool(num){
    this.pool = []
    this.num = num
}

Pool.prototype.once = function(){
    if (this.num > 0) {
        this.num--
        let mc = this.pool.pop()
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
    this.pool.push(mc)
    this.num++
}