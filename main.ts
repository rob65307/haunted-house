namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile1 = img`
c c c c c c c 5 5 5 5 5 5 c c c 
c b c c c b c 5 5 5 c c c c b c 
c c c b c c c 5 5 5 5 c b c b b 
c c b b c c c 5 5 5 c c c c c c 
c c c c c c c 5 5 5 5 5 5 c c c 
c b c c b c c 5 5 5 c c c c b c 
c c c c c c c 5 5 5 c c c c c c 
c c c c c c c 5 5 5 c c b b c c 
c c b c c c 5 5 5 5 5 c c c c c 
c c c c c 5 5 5 5 5 5 5 c c c c 
c c c c 5 5 c c c c c 5 5 c c c 
c b c c 5 5 c c c c c 5 5 c c b 
c b c c 5 5 c c c c c 5 5 c c c 
c c c c 5 5 c c c c c 5 5 c c c 
c c b c 5 5 5 5 5 5 5 5 5 c b c 
c c c c c 5 5 5 5 5 5 5 c c c c 
`
}
function createLvl1 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`0a001e0015151515151515151514150e0e0e0e0e0e0e0e0e15151515151515151515151515151307070715071515151510151515151515151516101515151515070707070815151515151515151515151515151515151515111515151515151515151015151515151515151510151515151516151515101515151515151515151015151515151515151515151515151515151515130715070715151515151015151515150707070708150c070707151515151515151515150e0e15110e0e0e150e0e1515151015151515151515161510151515151515151515101515090e150e1515151515150d1615151515150b15150d1515151515150b1515151515150707070815150c07070718181818040318181818181818180403181818181818181804031818181818181818040318181818`,
            img`
. . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. . . . 2 2 2 2 . 2 
. . . . 2 . . . . . 
. . . . 2 . . . . . 
2 2 2 2 2 . . . . . 
. . . . . . . . . . 
. . . . 2 . . . . . 
. . . . 2 . . . . . 
. . . . 2 . . . . . 
. . . . 2 . . . . . 
. . . . 2 . . . . . 
. . . . . . . . . . 
. . . . 2 2 . 2 2 . 
. . . . 2 . . . . . 
2 2 2 2 2 . 2 2 2 2 
. . . . . . . . . . 
2 2 . 2 2 2 2 . 2 2 
. . . 2 . . . . . . 
. . . 2 . . . . . . 
. . . 2 . . 2 2 . 2 
. . . . . . 2 . . . 
. . . 2 . . 2 . . . 
. . . 2 . . . . . . 
2 2 2 2 . . 2 2 2 2 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.rock0,sprites.castle.tileGrass2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.dungeon.floorLight2,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.stairLarge,sprites.dungeon.darkGroundSouthWest1,myTiles.tile1,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1],
            TileScale.Sixteen
        ))
    mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(mySprite, 75, 75)
    mySprite.setPosition(80, 450)
    badGuySpeed = 20
    keys = 0
    startTime = game.runtime() / 1000
    info.setLife(3)
    info.setScore(0)
    info.startCountdown(45)
    scene.cameraFollowSprite(mySprite)
    badguy = sprites.create(img`
. . f . . . . . . . . . . . . . . . . . . f . . 
. f 1 f . . . . . . f f f f . . . . . . f 1 f . 
. f 1 f . . . . f f 1 1 1 1 f f . . . . f 1 f . 
. f 1 f . . . f b 1 1 1 1 1 1 b f . . . f 1 f . 
. f d 1 f . . f 1 1 1 1 1 1 1 1 f . . f 1 d f . 
. . f d 1 f f d 1 1 1 1 1 1 1 1 d f f 1 d f . . 
. . . f d 1 f d 1 1 1 1 1 1 1 1 d f 1 d f . . . 
. . . . f d f d d d 1 1 1 1 d d d f d f . . . . 
. . . . . f f b d b f d d f b d b f f . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f b f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f f . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    badguy2 = sprites.create(img`
. . f . . . . . . . . . . . . . . . . . . f . . 
. f 1 f . . . . . . f f f f . . . . . . f 1 f . 
. f 1 f . . . . f f 1 1 1 1 f f . . . . f 1 f . 
. f 1 f . . . f b 1 1 1 1 1 1 b f . . . f 1 f . 
. f d 1 f . . f 1 1 1 1 1 1 1 1 f . . f 1 d f . 
. . f d 1 f f d 1 1 1 1 1 1 1 1 d f f 1 d f . . 
. . . f d 1 f d 1 1 1 1 1 1 1 1 d f 1 d f . . . 
. . . . f d f d d d 1 1 1 1 d d d f d f . . . . 
. . . . . f f b d b f d d f b d b f f . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f b f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f f . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    badguy3 = sprites.create(img`
. . f . . . . . . . . . . . . . . . . . . f . . 
. f 1 f . . . . . . f f f f . . . . . . f 1 f . 
. f 1 f . . . . f f 1 1 1 1 f f . . . . f 1 f . 
. f 1 f . . . f b 1 1 1 1 1 1 b f . . . f 1 f . 
. f d 1 f . . f 1 1 1 1 1 1 1 1 f . . f 1 d f . 
. . f d 1 f f d 1 1 1 1 1 1 1 1 d f f 1 d f . . 
. . . f d 1 f d 1 1 1 1 1 1 1 1 d f 1 d f . . . 
. . . . f d f d d d 1 1 1 1 d d d f d f . . . . 
. . . . . f f b d b f d d f b d b f f . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f b f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f f . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    badguy4 = sprites.create(img`
. . f . . . . . . . . . . . . . . . . . . f . . 
. f 1 f . . . . . . f f f f . . . . . . f 1 f . 
. f 1 f . . . . f f 1 1 1 1 f f . . . . f 1 f . 
. f 1 f . . . f b 1 1 1 1 1 1 b f . . . f 1 f . 
. f d 1 f . . f 1 1 1 1 1 1 1 1 f . . f 1 d f . 
. . f d 1 f f d 1 1 1 1 1 1 1 1 d f f 1 d f . . 
. . . f d 1 f d 1 1 1 1 1 1 1 1 d f 1 d f . . . 
. . . . f d f d d d 1 1 1 1 d d d f d f . . . . 
. . . . . f f b d b f d d f b d b f f . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f b f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f f . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    badguy5 = sprites.create(img`
. . f . . . . . . . . . . . . . . . . . . f . . 
. f 1 f . . . . . . f f f f . . . . . . f 1 f . 
. f 1 f . . . . f f 1 1 1 1 f f . . . . f 1 f . 
. f 1 f . . . f b 1 1 1 1 1 1 b f . . . f 1 f . 
. f d 1 f . . f 1 1 1 1 1 1 1 1 f . . f 1 d f . 
. . f d 1 f f d 1 1 1 1 1 1 1 1 d f f 1 d f . . 
. . . f d 1 f d 1 1 1 1 1 1 1 1 d f 1 d f . . . 
. . . . f d f d d d 1 1 1 1 d d d f d f . . . . 
. . . . . f f b d b f d d f b d b f f . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f b f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f f . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    badguy6 = sprites.create(img`
. . f . . . . . . . . . . . . . . . . . . f . . 
. f 1 f . . . . . . f f f f . . . . . . f 1 f . 
. f 1 f . . . . f f 1 1 1 1 f f . . . . f 1 f . 
. f 1 f . . . f b 1 1 1 1 1 1 b f . . . f 1 f . 
. f d 1 f . . f 1 1 1 1 1 1 1 1 f . . f 1 d f . 
. . f d 1 f f d 1 1 1 1 1 1 1 1 d f f 1 d f . . 
. . . f d 1 f d 1 1 1 1 1 1 1 1 d f 1 d f . . . 
. . . . f d f d d d 1 1 1 1 d d d f d f . . . . 
. . . . . f f b d b f d d f b d b f f . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f b f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f f . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    badguy7 = sprites.create(img`
. . f . . . . . . . . . . . . . . . . . . f . . 
. f 1 f . . . . . . f f f f . . . . . . f 1 f . 
. f 1 f . . . . f f 1 1 1 1 f f . . . . f 1 f . 
. f 1 f . . . f b 1 1 1 1 1 1 b f . . . f 1 f . 
. f d 1 f . . f 1 1 1 1 1 1 1 1 f . . f 1 d f . 
. . f d 1 f f d 1 1 1 1 1 1 1 1 d f f 1 d f . . 
. . . f d 1 f d 1 1 1 1 1 1 1 1 d f 1 d f . . . 
. . . . f d f d d d 1 1 1 1 d d d f d f . . . . 
. . . . . f f b d b f d d f b d b f f . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f b f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f f . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    badguy.setPosition(25, 325)
    badguy3.setPosition(25, 220)
    badguy4.setPosition(25, 160)
    badguy2.setPosition(135, 350)
    badguy5.setPosition(135, 200)
    badguy6.setPosition(135, 120)
    badguy7.setPosition(25, 70)
    badguy.vy = 50
    badguy2.vy = 50
    badguy3.vy = 50
    badguy4.vy = -50
    badguy5.vy = 50
    badguy6.vy = -50
    badguy7.vy = 50
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    keys += 1
    tiles.setTileAt(location, sprites.dungeon.darkGroundSouthWest1)
})
function calcScore (start: number, end: number) {
    info.changeScoreBy(45 - (end - start) + info.life())
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (keys == 4) {
        info.stopCountdown()
        stopTime = game.runtime() / 1000
        calcScore(startTime, stopTime)
        tiles.setTileAt(location, sprites.dungeon.darkGroundSouthWest1)
        game.over(true, effects.confetti)
    }
})
function moveBadGuy (bg: Sprite) {
    if (bg.isHittingTile(CollisionDirection.Bottom) || bg.isHittingTile(CollisionDirection.Right) || (bg.isHittingTile(CollisionDirection.Top) || bg.isHittingTile(CollisionDirection.Left))) {
        if (Math.randomRange(0, 7) == 0) {
            bg.setVelocity(badGuySpeed, badGuySpeed)
        } else if (Math.randomRange(0, 7) == 1) {
            bg.setVelocity(badGuySpeed, 0 - badGuySpeed)
        } else if (Math.randomRange(0, 7) == 2) {
            bg.setVelocity(0 - badGuySpeed, badGuySpeed)
        } else if (Math.randomRange(0, 7) == 3) {
            bg.setVelocity(0, badGuySpeed)
        } else if (Math.randomRange(0, 7) == 4) {
            bg.setVelocity(badGuySpeed, 0)
        } else if (Math.randomRange(0, 7) == 5) {
            bg.setVelocity(0, 0 - badGuySpeed)
        } else if (Math.randomRange(0, 7) == 6) {
            bg.setVelocity(0 - badGuySpeed, 0)
        } else {
            bg.setVelocity(0 - badGuySpeed, 0 - badGuySpeed)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    badGuySpeed += 10
    info.changeLifeBy(-1)
    pause(1000)
})
info.onCountdownEnd(function () {
    game.over(false, effects.splatter)
})
info.onLifeZero(function () {
    game.over(false, effects.splatter)
})
let stopTime = 0
let badguy7: Sprite = null
let badguy6: Sprite = null
let badguy5: Sprite = null
let badguy4: Sprite = null
let badguy3: Sprite = null
let badguy2: Sprite = null
let badguy: Sprite = null
let startTime = 0
let keys = 0
let badGuySpeed = 0
let mySprite: Sprite = null
createLvl1()
forever(function () {
    moveBadGuy(badguy)
    moveBadGuy(badguy2)
    moveBadGuy(badguy3)
    moveBadGuy(badguy4)
    moveBadGuy(badguy5)
    moveBadGuy(badguy6)
    moveBadGuy(badguy7)
})
forever(function () {
    mySprite.say(convertToText(keys))
})
