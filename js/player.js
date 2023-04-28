class Player {
    constructor(ctx, canvasSize, map, enemies, frameCounter) {
        this.ctx = ctx;
        this.canvasSize = canvasSize
        this.playerSpects = {
            size: { w: 100, h: 120 },
            pos: { x: 400, y: 840 },
            vel: { x: 0, y: -330 }
        }
        this.mapSped = 15
        this.ground = 890
        this.enemi = enemies
        this.map = map
        this.isFluidLeft = false
        this.isFluidRight = false
        this.image = undefined
        this.imageFrames = 12
        this.imageFramesIndex = 0
        this.framesCounter = frameCounter
        this.endGame = false
        this.init()
    }
    init() {
        this.setEventListeners()
        this.image = new Image()
        this.image.src = "./img/player.png"

    }
    draw() {
        this.move()
        this.drawPlayer()
    }
    setEventListeners() {
        document.onkeypress = ({ key }) => {
            if (key == 'a' || key == "A") this.isFluidLeft = true
            if (key == 'd' || key == "D") this.isFluidRight = true
        }
        document.onkeyup = ({ key }) => {
            if (key == 'a' || key == "A") this.isFluidLeft = false
            if (key == 'd' || key == "D") this.isFluidRight = false
            if (key == "w" || key == "W") this.jump()
        }
    }
    move() {

        this.advance()
        this.goBack()
        this.gravity()
        this.colisions()
        this.gameOver()

    }
    drawPlayer() {


        this.ctx.drawImage(
            this.image,
            this.image.width / this.imageFrames * this.imageFramesIndex,
            0,
            this.image.width / this.imageFrames,
            this.image.height,
            this.playerSpects.pos.x,
            this.playerSpects.pos.y,
            this.playerSpects.size.w,
            this.playerSpects.size.h)
        this.animate(this.framesCounter)
    }


    animate() {

        if (this.framesCounter % 1000 == 0) {
            this.imageFramesIndex++;
        }

        if (this.imageFramesIndex >= this.imageFrames) {
            this.imageFramesIndex = 0
        }
    }


    colisions() {
        this.leftColision()
        this.rightColision()
        this.walkPlat()
        this.downColission()
        this.ColissionDead()
        this.finish()


    }
    gravity() {

        if (this.ground > this.playerSpects.pos.y + this.playerSpects.size.h) {

            this.playerSpects.pos.y += this.playerSpects.vel.y
            this.playerSpects.vel.y += 4
        }
        else {
            this.playerSpects.pos.y = this.ground - this.playerSpects.size.h
            this.playerSpects.vel.y = 1
        }
    }
    advance() {



        for (let i = 0; i < this.map.length; i++) {


            if (this.leftColision()) this.isFluidRight = false

            if (this.isFluidRight) {
                this.map[i].mapSpects.pos.x -= this.mapSped
            } else {

            }
        }

        for (let j = 0; j < this.enemi.length; j++) {
            if (this.leftColision()) this.isFluidRight = false
            if (this.isFluidRight) {

                this.enemi[j].enemiesSpects.pos.x -= this.mapSped
            } else {


            }
        }
    }

    goBack() {
        for (let i = 0; i < this.map.length; i++) {

            if (this.rightColision()) this.isFluidLeft = false
            if (this.isFluidLeft) {
                this.map[i].mapSpects.pos.x += this.mapSped
            } else {
                this.map[i].mapSpects.pos.x += 0

            }

        }
        for (let j = 0; j < this.enemi.length; j++) {
            if (this.rightColision()) this.isFluidLeft = false
            if (this.isFluidLeft) {

                this.enemi[j].enemiesSpects.pos.x += this.mapSped
            } else {

                this.enemi[j].enemiesSpects.pos.x += 0
            }
        }

        // ESTO HACE QUE SOLO PUEDA SALTAR 3 VECES :)

    }
    jump() {
        this.playerSpects.pos.y -= 10
        this.playerSpects.vel.y = -40

        return true
    }
    leftColision() {
        for (let i = 0; i < this.map.length - 12; i++) {

            if (this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[i].mapSpects.pos.x &&
                this.playerSpects.pos.x < this.map[i].mapSpects.pos.x + (this.map[i].mapSpects.size.w - 20) &&
                this.playerSpects.pos.y < this.map[i].mapSpects.pos.y + this.map[i].mapSpects.size.h &&
                this.playerSpects.size.h + this.playerSpects.pos.y > this.map[i].mapSpects.pos.y) {

                return true
            }
        }
    }
    rightColision() {

        for (let i = 0; i < this.map.length - 12; i++) {

            if (this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[i].mapSpects.pos.x + this.map[i].mapSpects.size.w - 10 &&
                this.playerSpects.pos.x <= this.map[i].mapSpects.pos.x + this.map[i].mapSpects.size.w &&
                this.playerSpects.pos.y < this.map[i].mapSpects.pos.y + this.map[i].mapSpects.size.h &&
                this.playerSpects.size.h + this.playerSpects.pos.y > this.map[i].mapSpects.pos.y) return true
        }
    }
    walkPlat() {
        for (let i = 0; i < this.map.length; i++) {
            if (this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[i].mapSpects.pos.x + (this.playerSpects.size.w / 2) &&
                this.playerSpects.pos.x < this.map[i].mapSpects.pos.x + this.map[i].mapSpects.size.w &&
                this.playerSpects.pos.y + this.playerSpects.size.h < this.map[i].mapSpects.pos.y + this.map[i].mapSpects.size.h &&
                this.playerSpects.pos.y + this.playerSpects.size.h >= this.map[i].mapSpects.pos.y) {
                this.playerSpects.pos.y = this.map[i].mapSpects.pos.y - this.playerSpects.size.h
                this.playerSpects.vel.y = 50
            }
        }

    }

    downColission() {
        for (let i = 0; i < this.map.length; i++) {
            if (this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[i].mapSpects.pos.x + 10 &&
                this.playerSpects.pos.x < this.map[i].mapSpects.pos.x + this.map[i].mapSpects.size.w &&
                this.playerSpects.pos.y + this.playerSpects.size.h < this.map[i].mapSpects.pos.y + this.map[i].mapSpects.size.h &&
                this.playerSpects.pos.y + this.playerSpects.size.h >= this.map[i].mapSpects.pos.y + 1) {

                this.playerSpects.vel.y = 0
                return true
            }


        }

    }
    ColissionDead() {

        for (let i = 0; i < this.enemi.length; i++) {

            if (this.playerSpects.pos.x + this.playerSpects.size.w >= this.enemi[i].enemiesSpects.pos.x &&
                this.playerSpects.pos.x < this.enemi[i].enemiesSpects.pos.x + this.enemi[i].enemiesSpects.size.w &&
                this.playerSpects.size.h + this.playerSpects.pos.y > this.enemi[i].enemiesSpects.pos.y) return true
        }
    }

    finish() {


        if (this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[38].mapSpects.pos.x &&
            this.playerSpects.pos.x < this.map[38].mapSpects.pos.x + this.map[38].mapSpects.size.w &&
            this.playerSpects.size.h + this.playerSpects.pos.y > this.map[38].mapSpects.pos.y) {
            this.playerSpects.vel.y = 0

            if (this.playerSpects.pos.y + this.playerSpects.size.h < 1060) {
                this.playerSpects.pos.y += this.playerSpects.vel.y
                this.playerSpects.vel.y += 10

            }
        }

    }

    gameOver() {

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[39].mapSpects.pos.x + this.map[39].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[40].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[40].mapSpects.pos.x + this.map[40].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[41].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[41].mapSpects.pos.x + this.map[41].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[42].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[42].mapSpects.pos.x + this.map[42].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[43].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[43].mapSpects.pos.x + this.map[43].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[44].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[44].mapSpects.pos.x + this.map[44].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[45].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[45].mapSpects.pos.x + this.map[45].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[46].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[46].mapSpects.pos.x + this.map[46].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[47].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[47].mapSpects.pos.x + this.map[47].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[48].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[48].mapSpects.pos.x + this.map[48].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[49].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[49].mapSpects.pos.x + this.map[49].mapSpects.size.w &&
            this.playerSpects.pos.x <= this.map[50].mapSpects.pos.x) return true

        if (this.playerSpects.pos.y + this.playerSpects.size.h >= 922 &&
            this.playerSpects.pos.x + this.playerSpects.size.w >= this.map[50].mapSpects.pos.x + this.map[50].mapSpects.size.w) return true

        if (this.ColissionDead()) return true
    }





}