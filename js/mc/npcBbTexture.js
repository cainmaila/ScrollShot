/* 敵人的子彈素材 */
function NpcBbTexture() {
    var graphics = new PIXI.Graphics()
    graphics.beginFill(0xff0000)
    graphics.lineStyle(1, 0xffffff, 1)
    graphics.drawCircle(0, 0, 4)
    graphics.endFill()
    graphics.cacheAsBitmap = true
    //graphics to Texture
    return app.renderer.generateTexture(graphics)
}
