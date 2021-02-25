game.startCountdown(40000)
let COIN = game.createSprite(randint(0, 4), randint(0, 4))
COIN.set(LedSpriteProperty.Brightness, 180)
let CHAIR = game.createSprite(2, 2)
while (true) {
    if (COIN.isTouching(CHAIR)) {
        game.addScore(1)
        COIN.set(LedSpriteProperty.X, randint(0, 4))
        COIN.set(LedSpriteProperty.Y, randint(0, 4))
    }
    if (true) {
    	
    }
    if (input.acceleration(Dimension.X) > 0) {
        CHAIR.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        CHAIR.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        CHAIR.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
}
