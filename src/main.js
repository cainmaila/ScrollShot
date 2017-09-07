const app = new PIXI.Application({
    width: 1000,
    height: 800,
    backgroundColor: 0x3e81bb,
})
const renderer = app.renderer
const game = document.getElementById('game')

renderer.autoResize = true;
game.appendChild(app.view)
onResize()

PIXI.loader
    .add("images/me.png")
    .add("images/sea.jpg")
    .load(setup)


window.addEventListener('resize', onResize)
window.addEventListener('orientationChange', onResize)

function setup() {
    const sea = new PIXI.extras.TilingSprite(
        PIXI.loader.resources["images/sea.jpg"].texture,
        app.renderer.width,
        app.renderer.height
    )
    const me = new PIXI.Sprite(
        PIXI.loader.resources["images/me.png"].texture
    )
    me.anchor.set(0.5)
    me.x = app.renderer.width >> 1
    me.y = app.renderer.height >> 1

    app.stage.addChild(sea)
    app.stage.addChild(me)

    app.ticker.add(t => {
        sea.tilePosition.y += 3
        me.x += me.vx
        me.y += me.vy
    })

    me.vx = 0

    app.down = false
    app.downPo = {}
    app.mouse = {}
    app.stage.interactive = true

    app.stage.on('pointerdown', e => {
        app.down = true
        app.downPo.x = e.data.global.x
        app.downPo.y = e.data.global.y
    })

    app.stage.on('pointermove', e => {
        app.mouse.x = e.data.global.x
        app.mouse.y = e.data.global.y
        if (app.down) {
            let xd = app.mouse.x - app.downPo.x
            let yd = app.mouse.y - app.downPo.y
            me.vx = Math.atan(xd / 100) * 10
            me.vy = Math.atan(yd / 100) * 10
        } else {
            me.vx = 0
            me.vy = 0
        }
    })

    app.stage.on('pointerup', () => {
        app.down = false
    })
}



function onResize() {
    renderer.resize(window.innerWidth, window.innerHeight)
    game.style.width = window.innerWidth + 'px'
    game.style.height = window.innerHeight + 'px'
}