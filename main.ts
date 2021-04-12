namespace SpriteKind {
    export const Gap = SpriteKind.create()
}
// Jump on A button
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dementor.vy = -100
animation.runImageAnimation(
    dementor,
    dementorAnimationFrames,
    200,
    false
    )
})
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
startGame()
// Game over when falling out of screen
game.onUpdate(function () {
    if (dementor.bottom > 125) {
        game.over(false)
    }
})
// Game over when jumping out of screen
game.onUpdate(function () {
    if (dementor.top < 0) {
        game.over(false)
    }
})
