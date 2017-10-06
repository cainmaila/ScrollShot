function Bom() {
    PIXI.extras.AnimatedSprite.call(this, [PIXI.loader.resources['images/bom.png'].texture, PIXI.loader.resources['images/bom2.png'].texture])
    this.life = 0
    this.visible = false
    this.animationSpeed = 0.1
    this.loop = false
    this.anchor.set(0.5)
    this.onComplete = this.die
    app.stage.addChild(this)
}
Bom.prototype = Object.create(PIXI.extras.AnimatedSprite.prototype)
Bom.prototype.die = function () {
    this.life = 0
}
Bom.prototype.inStage = function (_f) {
    this.visible = _f
    this.gotoAndPlay(0)
}