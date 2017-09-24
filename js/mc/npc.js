function Npc(){
    Mc.call(this, "images/npc.png")
    this.x = app.stageW >> 1
    this.y = 0
    this.v = {
        x:0,
        y:4
    }
    this.life = 0
    this.d = 15
}
Npc.prototype = Object.create(Mc.prototype)
Npc.prototype.next = function (t) {
    Mc.prototype.next.call(this)
    this.v.x = Math.sin(this.y/100)*2
    npcOut(this)?this.life=0:''
}