/**
 * 邊界檢查
 */
function borderChk(mc) {
    if (mc.x > app.stageW) {
        mc.x = app.stageW
    } else if (mc.x < 0) {
        mc.x = 0
    }
    if (mc.y > app.stageH) {
        mc.y = app.stageH
    } else if (mc.y < 0) {
        mc.y = 0
    }
}

//出界判定
function borderOut(mc) {
    if (mc.x > app.stageW) {
        return true
    }
    if (mc.x < 0) {
        return true
    }
    if (mc.y > app.stageH) {
        return true
    }
    if (mc.y < 0) {
        return true
    }
}

function bbOut(bb) {
    if (bb.y < 0) {
        return true
    }
}

function npcOut(npc) {
    if (npc.y > app.stageH) {
        return true
    }
}
