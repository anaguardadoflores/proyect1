class Background {
    constructor(ctx) {
        this.ctx = ctx
        this.backgroundW = 1920
        this.backgroundH = 886
        this.posX = 0
        this.posY = 0
        this.velX = 10
        this.image = undefined
        this.image2 = undefined

        this.init()
    }

    init() {
        this.image = new Image()
        this.image.src = "./img/background.jpg"

        this.image2 = new Image()
        this.image2.src = "./img/background.jpg"
    }



    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.backgroundW, this.backgroundH);
        this.ctx.drawImage(this.image, this.posX + this.backgroundW, this.posY, this.backgroundW, this.backgroundH);
        this.ctx.drawImage(this.image2, 0, 887, 16100, 1000);
        this.move()
    }

    move() {
        if (this.posX <= -this.backgroundW) {
            this.posX = 0;
        }

    }
}