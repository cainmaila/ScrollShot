//實體
function Mc(texture) {
    PIXI.Sprite.call(this, PIXI.loader.resources[texture].texture)
    this.anchor.set(0.5)
    this.v = { x: 0, y: 0 }
    app.ticker.add(this.next, this)
}
Mc.prototype = Object.create(PIXI.Sprite.prototype)
Mc.prototype.next = function () {
    this.x += this.v.x
    this.y += this.v.y
}
Mc.prototype.die = function () {
    app.ticker.remove(this.next, this)
    this.destroy()
}