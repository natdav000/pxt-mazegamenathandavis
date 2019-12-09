sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        otherSprite.setPosition(Math.randomRange(32, 300), Math.randomRange(100, 300))
    }
    info.startCountdown(10)
})
let _orange: Sprite = null
scene.setTileMap(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 8 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 8 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 8 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 8 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 8 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 8 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 8 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 8 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 8 9 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 8 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 8 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 2 
2 8 8 8 8 8 8 8 8 9 9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 2 
2 8 9 9 9 9 9 9 8 9 9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 2 
2 8 9 9 8 8 8 9 8 9 9 9 9 8 9 9 9 9 9 9 9 9 8 8 9 9 8 8 8 9 9 2 
2 8 9 9 9 9 8 9 8 9 9 9 9 8 9 9 9 9 9 9 9 9 8 9 9 9 8 9 8 9 9 2 
2 8 9 9 8 8 8 9 8 9 9 9 9 8 8 8 8 8 8 8 8 8 8 9 9 9 8 9 8 9 9 2 
2 9 9 8 8 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 8 9 9 2 
2 9 9 8 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 8 9 9 2 
2 9 9 8 9 9 9 9 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 8 9 9 2 
2 9 9 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 9 9 2 
2 9 9 9 9 8 8 8 8 8 8 9 8 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 8 9 9 2 
2 9 9 9 8 8 9 9 9 9 8 9 8 9 9 9 9 9 9 8 8 8 8 8 8 8 8 9 8 9 9 2 
2 9 9 9 8 9 9 9 9 9 9 9 8 9 9 8 9 9 9 8 9 9 9 9 9 9 9 9 8 9 9 2 
2 9 9 8 8 8 8 8 8 8 9 9 8 9 9 8 9 9 9 8 9 9 9 9 9 9 9 9 8 9 9 2 
2 9 9 8 9 9 9 9 9 8 8 8 8 9 9 8 9 9 8 8 8 8 8 8 8 8 8 8 8 9 9 2 
2 9 9 8 9 9 9 9 9 9 9 9 9 9 9 8 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`)
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
mySprite.setPosition(38, 43)
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
controller.moveSprite(mySprite)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
8 5 8 8 8 8 8 8 8 8 8 8 8 8 5 8 
8 5 8 5 5 5 5 5 5 5 5 5 5 8 5 8 
8 5 8 5 8 8 8 8 8 8 8 8 5 8 5 8 
8 5 8 5 8 5 5 5 5 5 5 8 5 8 5 8 
8 5 8 5 8 5 8 8 8 8 5 8 5 8 5 8 
8 5 8 5 8 5 8 5 5 8 5 8 5 8 5 8 
8 5 8 5 8 5 8 5 5 8 5 8 5 8 5 8 
8 5 8 5 8 5 8 8 8 8 5 8 5 8 5 8 
8 5 8 5 8 5 5 5 5 5 5 8 5 8 5 8 
8 5 8 5 8 8 8 8 8 8 8 8 5 8 5 8 
8 5 8 5 5 5 5 5 5 5 5 5 5 8 5 8 
8 5 8 8 8 8 8 8 8 8 8 8 8 8 5 8 
8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
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
    _orange.setPosition(Math.randomRange(32, 500), Math.randomRange(32, 300))
    _orange.z = 1
}
info.startCountdown(10)
