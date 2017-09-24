/**
 * 搖桿
 */
function rocker(me) {
    app.stage.interactive = true
    app.down = false
    app.downPo = {}
    app.mouse = {}
    app.stage.on('pointerdown', e => {
        me.isFire = true
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
                y: Math.atan(yd / 100) * 10,
            }
        } else {
            me.v = {
                x: 0,
                y: 0
            }
        }
    })

    app.stage.on('pointerup', () => {
        me.isFire = false
        app.down = false
        me.v = {
            x: 0,
            y: 0
        }
    })
}