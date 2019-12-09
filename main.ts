sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        _orange.setPosition(Math.randomRange(32, 300), Math.randomRange(100, 300))
    }
    info.startCountdown(10)
})
let _orange: Sprite = null
scene.setTileMap(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 9 9 9 9 9 2 
2 9 9 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 9 9 9 2 
2 9 9 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 9 9 9 2 
2 9 9 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 9 9 2 
2 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 9 9 7 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 9 7 7 7 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 7 7 6 7 7 9 9 9 9 9 9 9 7 7 7 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 9 9 9 9 9 9 9 9 9 7 6 7 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 6 7 7 9 9 2 
2 9 9 9 9 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 9 9 9 9 2 
2 9 9 9 9 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 7 9 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 7 6 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 7 7 6 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 6 9 9 9 9 9 7 7 9 9 9 9 9 9 8 8 8 9 9 2 
2 9 9 9 7 7 9 9 9 9 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 8 8 8 8 9 9 2 
2 9 9 9 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 9 2 
2 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 2 
2 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`)
scene.setTile(2, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
scene.setTile(6, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 8 8 . . . . . 
. . . . 8 8 8 8 8 1 1 8 8 . . . 
. . 8 8 8 8 8 8 8 1 1 1 8 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 1 1 . . . . . . 1 1 . . . 
. . . 1 1 . . . . . . 1 1 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 40; index++) {
    _orange = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 7 7 . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    _orange.setPosition(Math.randomRange(32, 300), Math.randomRange(100, 300))
    _orange.z = 1
}
info.startCountdown(10)
