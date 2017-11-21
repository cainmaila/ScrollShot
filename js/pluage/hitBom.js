function hitNpcTest(bb) {
    app.npcPool.free.some(function(npc) {
        if (hitTest(npc, bb)) {
            npc.life--
            bb.life--
            if (npc.life === 0) {
                app.bomPool.bom(npc)
            }
            return true
        }
    })
}

function meHit() {
    app.npcPool.free.forEach(function(npc) {
        if (hitTest(app.me, npc)) {
            app.me.life--
            npc.life--
        }
    })
}

function hitTestDelLife(a, b) {
    if (hitTest(a, b)) {
        a.life--
        b.life--
    }
}

function hitTest(m1, m2) {
    if (m2.y - m2.d <= m1.y + m1.d) {
        let dx = m1.x - m2.x
        let dy = m1.y - m2.y
        let dd = m1.d + m2.d
        return dx * dx + dy * dy <= dd * dd ? true : false
    }
    return false
}
