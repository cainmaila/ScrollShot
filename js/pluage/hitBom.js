function hitNpcTest(bb){
    app.npcPool.free.some(function(npc) {
        if(hitTest(npc,bb)){
            npc.life--
            bb.life--
            return true
        }
    })
}

function hitTest(m1,m2){
    if(m2.y-m2.d<=m1.y+m1.d){
        let dx = m1.x-m2.x
        let dy = m1.y-m2.y
        let dd = m1.d+m2.d
        return dx*dx+dy*dy <=  dd*dd ? true:false
    }
    return false
}