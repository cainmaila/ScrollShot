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
        mc.x = app.stageH
    } else if (mc.y < 0) {
        mc.y = 0
    }
}