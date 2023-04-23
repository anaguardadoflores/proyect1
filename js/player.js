class Player {
    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.playerSpects = {
            size: { w: 63, h: 70 },
            pos: { x: 300, y: 813 },
            vel: { x: 0, y: -25 }
        }
        this.canvasSize = canvasSize
        this.init()

    }

    init() {

        this.setEventListeners()


    }

    draw() {


        //  this.move()
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(
            this.playerSpects.pos.x,
            this.playerSpects.pos.y,
            this.playerSpects.size.w,
            this.playerSpects.size.h)
    }



    setEventListeners() {
        document.onkeydown = ({ key }) => {
            if (key == 'a' || key == "A") this.goBack()
            if (key == 'd' || key == "D") this.advance()
        }
        document.onkeyup = ({ key }) => {
            if (key == "w" || key == "W") this.jump()
        }
    }

    advance() {
        this.playerSpects.pos.x += 30
    }

    goBack() {
        this.playerSpects.pos.x -= 30
    }
    jump() {
        this.playerSpects.pos.y -= 30

    }


    // move() {
    //     console.log(this.playerSpects.pos.y + this.playerSpects.size.h, this.canvasSize.h)
    //     if (this.playerSpects.pos.x >= 200 && this.playerSpects.pos.y + this.playerSpects.size.h <= this.canvasSize.h) {

    //         this.playerSpects.vel.y += .1       // gravity
    //         this.playerSpects.pos.y += - this.playerSpects.vel.y

    //     }
    // }



    // console.log(parseInt(this.playerSpects.pos.y), this.playerSpects.size.h, this.canvasSize.h, this.playerSpects.vel.y)
    // if (this.playerSpects.pos.y + this.playerSpects.size.h < this.canvasSize.h && this.playerSpects.pos.y + this.playerSpects.size.h > 700) {
    //     this.playerSpects.vel.y = -30
    //     this.playerSpects.pos.y += this.playerSpects.vel.y
    // }


    // else {
    //     this.playerSpects.vel.y = 40
    //     this.playerSpects.pos.y += this.playerSpects.vel.y

    // }

    //     // this.playerSpects.vel.y = 0    // gravity
    //     // this.playerSpects.pos.y = 980


    turnVertical() {
        this.playerSpects.vel.y *= -1










    }






}

