//實體
function Mc(texture) {
    this.mc = new PIXI.Sprite(
        PIXI.loader.resources[texture].texture
    )
    this.v = { x: 0, y: 0 }
    this.mc.anchor.set(0.5)
    app.ticker.add(t => {
        this.mc.x += this.v.x
        this.mc.y += this.v.y
    })
}
Mc.prototype.setV = function (v) {
    this.v = v
}
Mc.prototype.stop = function (v) {
    this.v.x = 0
    this.v.y = 0
}