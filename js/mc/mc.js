//實體
function Mc(texture, inStage) {
    //檢查texture傳入圖檔則抓素材，不然就是容器物件
    if (typeof texture === 'string') {
        PIXI.Sprite.call(this, PIXI.loader.resources[texture].texture)
    } else {
        PIXI.Sprite.call(this, texture)
    }
    this.anchor.set(0.5)
    this.v = { x: 0, y: 0 }
    this.life = 1
    this.d = 0
    app.stage.addChild(this)
    inStage ? this.inStage(true) : ''
    this.visible = inStage ? true : false
}
Mc.prototype = Object.create(PIXI.Sprite.prototype)
Mc.prototype.next = function() {
    this.x += this.v.x
    this.y += this.v.y
}
Mc.prototype.inStage = function(_f) {
    if (_f) {
        app.ticker.add(this.next, this)
    } else {
        app.ticker.remove(this.next, this)
    }
    this.visible = _f
}
Mc.prototype.die = function() {
    app.ticker.remove(this.next, this)
    this.destroy()
}
