const app = new PIXI.Application({
    width: 0,
    height: 0,
    backgroundColor: 0x3e81bb,
})
app.stageW = 0
app.stageH = 0
const renderer = app.renderer
const game = document.getElementById('game')
let sea, me
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
    me = new Me()
    me.x = app.renderer.width >> 1
    me.y = app.renderer.height >> 1

    app.stage.addChild(sea)
    app.stage.addChild(me)

    app.ticker.add(t => {
        sea.tilePosition.y += 3
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
            me.v = {
                x: Math.atan(xd / 100) * 10,
                y: Math.atan(yd / 100) * 10
            }
        } else {
            me.v = {
                x: 0,
                y: 0
            }
        }
    })

    app.stage.on('pointerup', () => {
        app.down = false
        // me.vx = 0
        // me.vy = 0
        me.v = {
            x: 0,
            y: 0
        }
    })
}



function onResize() {
    app.stageW = window.innerWidth
    app.stageH = window.innerHeight
    renderer.resize(app.stageW, app.stageH)
    game.style.width = app.stageW + 'px'
    game.style.height = app.stageH + 'px'
    if (!sea) return
    sea.width = app.stageW
    sea.height = app.stageH
}