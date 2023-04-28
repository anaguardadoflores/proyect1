class Enemies {
    constructor(ctx, posX, posY, sizeW, sizeH, velX, velY, color, id, map) {

        this.ctx = ctx;
        this.enemiesSpects = {
            pos: { x: posX, y: posY },
            size: { w: sizeW, h: sizeH },
            vel: { x: velX, y: velY },
            id: id,
            color: color
        },
            this.map = map,
            this.mapSpects = {
                pos: { x: this.map[0].mapSpects.pos.x, y: this.map[0].mapSpects.pos.y },
                size: { w: this.map[0].mapSpects.size.w, h: this.map[0].mapSpects.size.h }
            },
            this.image = undefined,
            this.image2 = undefined,
            this.image3 = undefined
        this.init()
    }
    init() {
        this.image = new Image()
        this.image.src = "./img/seta.png"

        this.image2 = new Image()
        this.image2.src = "./img/pngwing.com.png"

        this.image3 = new Image()
        this.image3.src = "./img/pngwing.com (7).png"

        this.image4 = new Image()
        this.image4.src = "./img/galleta.png"

        this.image5 = new Image()
        this.image5.src = "./img/mini.png"
    }

    draw() {
        if (this.enemiesSpects.color == "sierra") {
            this.moveSierra()
            this.ctx.drawImage(
                this.image,
                this.enemiesSpects.pos.x,
                this.enemiesSpects.pos.y,
                this.enemiesSpects.size.w,
                this.enemiesSpects.size.h
            )
        }

        if (this.enemiesSpects.color == "planta") {
            this.movePlanta()

            this.ctx.drawImage(
                this.image2,
                this.enemiesSpects.pos.x,
                this.enemiesSpects.pos.y,
                this.enemiesSpects.size.w,
                this.enemiesSpects.size.h
            )
        }

        if (this.enemiesSpects.color == "bowser") {
            this.movePlanta()
            this.ctx.drawImage(
                this.image3,
                this.enemiesSpects.pos.x,
                this.enemiesSpects.pos.y,
                this.enemiesSpects.size.w,
                this.enemiesSpects.size.h
            )
        }

        if (this.enemiesSpects.color == "mini") {
            this.movePlanta()
            this.ctx.drawImage(
                this.image5,
                this.enemiesSpects.pos.x,
                this.enemiesSpects.pos.y,
                this.enemiesSpects.size.w,
                this.enemiesSpects.size.h
            )
        }

        if (this.enemiesSpects.color == "galleta") {
            this.moveSierra()
            this.ctx.drawImage(
                this.image4,
                this.enemiesSpects.pos.x,
                this.enemiesSpects.pos.y,
                this.enemiesSpects.size.w,
                this.enemiesSpects.size.h
            )
        }



    }
    moveSierra() {
        if (this.enemiesSpects.id === 1) {

            if (this.enemiesSpects.pos.x + this.enemiesSpects.size.w <= this.map[2].mapSpects.pos.x) this.turnHorizontal()
            if (this.enemiesSpects.pos.x >= this.map[1].mapSpects.pos.x + this.map[1].mapSpects.size.w) this.turnHorizontal()
        }
        if (this.enemiesSpects.id === 2) {
            if (this.enemiesSpects.pos.x + this.enemiesSpects.size.w <= this.map[23].mapSpects.pos.x) this.turnHorizontal()
            if (this.enemiesSpects.pos.x >= this.map[6].mapSpects.pos.x + this.map[6].mapSpects.size.w) this.turnHorizontal()
        }
        if (this.enemiesSpects.id === 3) {

            if (this.enemiesSpects.pos.x + this.enemiesSpects.size.w <= this.map[27].mapSpects.pos.x) this.turnHorizontal()
            if (this.enemiesSpects.pos.x >= this.map[25].mapSpects.pos.x + this.map[25].mapSpects.size.w) this.turnHorizontal()
        }
        if (this.enemiesSpects.id === 4) {

            if (this.enemiesSpects.pos.x <= this.map[15].mapSpects.pos.x - 50) this.turnHorizontal()
            if (this.enemiesSpects.pos.x + this.enemiesSpects.size.w >= this.map[48].mapSpects.pos.x + 70) this.turnHorizontal()
        }
        if (this.enemiesSpects.id === 5) {
            if (this.enemiesSpects.pos.x <= this.map[15].mapSpects.pos.x - 50) this.turnHorizontal()
            if (this.enemiesSpects.pos.x + this.enemiesSpects.size.w >= this.map[48].mapSpects.pos.x + 70) this.turnHorizontal()
        }

        if (this.enemiesSpects.id === 10) {
            if (this.enemiesSpects.pos.x <= this.map[13].mapSpects.pos.x - 70) this.turnHorizontal()
            if (this.enemiesSpects.pos.x + this.enemiesSpects.size.w >= this.map[47].mapSpects.pos.x + 65) this.turnHorizontal()
        }

        this.enemiesSpects.pos.x += this.enemiesSpects.vel.x
    }
    turnHorizontal() {
        this.enemiesSpects.vel.x *= -1
    }


    movePlanta() {
        if (this.enemiesSpects.id === 6) {

            if (this.enemiesSpects.pos.y + this.enemiesSpects.size.h <= this.map[2].mapSpects.pos.y) this.turnVertial()
            if (this.enemiesSpects.pos.y + this.enemiesSpects.size.h >= 1200) this.turnVertial()
            this.enemiesSpects.pos.y += this.enemiesSpects.vel.y
        }
        if (this.enemiesSpects.id === 7) {

            if (this.enemiesSpects.pos.y + this.enemiesSpects.size.h <= this.map[6].mapSpects.pos.y) this.turnVertial()
            if (this.enemiesSpects.pos.y + this.enemiesSpects.size.h >= 1100) this.turnVertial()
            this.enemiesSpects.pos.y += this.enemiesSpects.vel.y
        }

        if (this.enemiesSpects.id === 8) {

            if (this.enemiesSpects.pos.y + this.enemiesSpects.size.h <= this.map[11].mapSpects.pos.y) this.turnVertial()
            if (this.enemiesSpects.pos.y >= 570) this.turnVertial()
            this.enemiesSpects.pos.y += this.enemiesSpects.vel.y
        }

        if (this.enemiesSpects.id === 9) {

            if (this.enemiesSpects.pos.y + this.enemiesSpects.size.h <= this.map[14].mapSpects.pos.y) this.turnVertial()
            if (this.enemiesSpects.pos.y + this.enemiesSpects.size.h >= 1000) this.turnVertial()
            this.enemiesSpects.pos.y += this.enemiesSpects.vel.y
        }

        if (this.enemiesSpects.id === 11) {

            if (this.enemiesSpects.pos.y + this.enemiesSpects.size.h <= this.map[9].mapSpects.pos.y) this.turnVertial()
            if (this.enemiesSpects.pos.y + this.enemiesSpects.size.h >= 1000) this.turnVertial()
            this.enemiesSpects.pos.y += this.enemiesSpects.vel.y
        }
    }

    turnVertial() {
        this.enemiesSpects.vel.y *= -1
    }
}