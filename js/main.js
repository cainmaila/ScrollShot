const app = new PIXI.Application({
    width: 0,
    height: 0,
    backgroundColor: 0x3e81bb,
})
app.stageW = 0
app.stageH = 0
app.me = null
const renderer = app.renderer
const game = document.getElementById('game')
let sea
renderer.autoResize = true;
game.appendChild(app.view)
onResize()

PIXI.loader
    .add("images/me.png")
    .add("images/sea.jpg")
    .add("images/bb.png")
    .load(setup)


window.addEventListener('resize', onResize)
window.addEventListener('orientationChange', onResize)

function setup() {
    sea = new PIXI.extras.TilingSprite(
        PIXI.loader.resources["images/sea.jpg"].texture,
        app.stageW,
        app.stageH
    )
    app.stage.addChild(sea)

    app.ticker.add(t => {
        sea.tilePosition.y += 3
    })

    new Me()

    // const BB_T = 4
    // let bb_t = BB_T
    // app.ticker.add(t => {
    //     bb_t -= t
    //     if (bb_t <= 0) {
    //         app.me.fire()
    //         bb_t = BB_T
    //     }
    // })
    rocker()
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