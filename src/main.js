const app = new PIXI.Application({
    width: 1000,
    height: 800,
    backgroundColor: 0x3e81bb,
})
const renderer = app.renderer
const game = document.getElementById('game')
let stageW, stageH, sea, me
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
    sea = new PIXI.extras.TilingSprite(
        PIXI.loader.resources["images/sea.jpg"].texture,
        app.renderer.width,
        app.renderer.height
    )
    me = new Mc("images/me.png")
    // me = new PIXI.Sprite(
    //     PIXI.loader.resources["images/me.png"].texture
    // )
    // me.anchor.set(0.5)
    me.mc.x = app.renderer.width >> 1
    me.mc.y = app.renderer.height >> 1
    // me.vx = 0
    // me.vy = 0

    app.stage.addChild(sea)
    app.stage.addChild(me.mc)

    app.ticker.add(t => {
        sea.tilePosition.y += 3
        // me.x += me.vx
        // me.y += me.vy
    })

    // me.vx = 0

    app.down = false
    app.downPo = {}
    app.mouse = {}
    app.stage.interactive = true
    app.stage.on('pointerdown', e => {
        if (app.down) {
            return
        }
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
            me.setV({
                x: Math.atan(xd / 100) * 10,
                y: Math.atan(yd / 100) * 10
            })
            // me.vx = Math.atan(xd / 100) * 10
            // me.vy = Math.atan(yd / 100) * 10
        } else {
            // me.vx = 0
            // me.vy = 0
            me.stop()
        }
    })

    app.stage.on('pointerup', () => {
        app.down = false
        // me.vx = 0
        // me.vy = 0
        me.stop()
    })
}



function onResize() {
    stageW = window.innerWidth
    stageH = window.innerHeight
    renderer.resize(stageW, stageH)
    game.style.width = stageW + 'px'
    game.style.height = stageH + 'px'
    if (!sea) return
    sea.width = stageW
    sea.height = stageH
}