let player

// measurement variables
let w = window.innerWidth
let h = window.innerHeight

let bx = w / 2
let by = h / 2

function setup() {
    createCanvas(w, h)
    player = new figure()
}

function figure() {
    //starting point of the player
    this.x = bx
    this.y = by

    //function to setup the initial player position
    this.show = function () {
        //determine what it will look like
        fill('red')
        circle(this.x, this.y, 50)
    }
}

function draw() {
    clear()
    player.show()
    let speed = 5

    //conditional statement, if the x of the ball goes =0 or <0, the conditional wont run
    if (player.x > 0) {
        if (keyIsDown(LEFT_ARROW)) {
            player.x -= speed
        }
    }
    //conditional statement, if the x of the ball goes =0 or <0, the conditional wont run
    if (player.x <= w) {
        if (keyIsDown(RIGHT_ARROW)) {
            player.x += speed
        }
    }

    if (player.y > 0) {
        if (keyIsDown(UP_ARROW)) {
            player.y -= speed
        }
    }

    if (player.y <= h) {
        if (keyIsDown(DOWN_ARROW)) {
            player.y += speed
        }
    }
}
