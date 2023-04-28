class Map {
    constructor(ctx, color, posX, posY, sizeW, sizeH, id) {

        this.ctx = ctx;
        this.mapSpects = {
            pos: { x: posX, y: posY },
            size: { w: sizeW, h: sizeH },

            id: id,
            color: color,
            image1: undefined,
            image2: undefined,
            image3: undefined,
            image4: undefined,
            //  image5: undefined,
            image6: undefined


        }
        this.init()

    }

    init() {
        this.image1 = new Image()
        this.image1.src = "./img/Cracked.png"

        this.image2 = new Image()
        this.image2.src = "./img/trap1.png"


        this.image3 = new Image()
        this.image3.src = "./img/ladrillo.png"

        this.image4 = new Image()
        this.image4.src = "./img/tubs.png"

        // this.image5 = new Image()
        // this.image5.src = "./img/lava.jpg"

        this.image6 = new Image()
        this.image6.src = "./img/pngwing.com_7.png"

        this.image7 = new Image()
        this.image7.src = "./img/salida.png"

        this.image8 = new Image()
        this.image8.src = "./img/teclas.png"

        this.image9 = new Image()
        this.image9.src = "./img/portada.png"
    }

    draw() {
        if (this.mapSpects.color == "ground") {

            this.ctx.drawImage(
                this.image1,
                this.mapSpects.pos.x,
                this.mapSpects.pos.y,
                this.mapSpects.size.w,
                this.mapSpects.size.h
            )
        } else if (this.mapSpects.color == "tramp") {
            this.ctx.drawImage(
                this.image2,
                this.mapSpects.pos.x,
                this.mapSpects.pos.y,
                this.mapSpects.size.w,
                this.mapSpects.size.h
            )
        } else if (this.mapSpects.color == "platform") {
            this.ctx.drawImage(
                this.image3,
                this.mapSpects.pos.x,
                this.mapSpects.pos.y,
                this.mapSpects.size.w,
                this.mapSpects.size.h
            )
        } else if (this.mapSpects.color == "tuberias") {
            this.ctx.drawImage(
                this.image4,
                this.mapSpects.pos.x,
                this.mapSpects.pos.y,
                this.mapSpects.size.w,
                this.mapSpects.size.h
            )
        }
        else if (this.mapSpects.color == "lav") {
            this.ctx.drawImage(
                this.image5,
                this.mapSpects.pos.x,
                this.mapSpects.pos.y,
                this.mapSpects.size.w,
                this.mapSpects.size.h
            )


        }
        else if (this.mapSpects.color == "trophy") {
            this.ctx.drawImage(
                this.image6,
                this.mapSpects.pos.x,
                this.mapSpects.pos.y,
                this.mapSpects.size.w,
                this.mapSpects.size.h
            )




        } else if (this.mapSpects.color == "salida") {
            this.ctx.drawImage(
                this.image7,
                this.mapSpects.pos.x,
                this.mapSpects.pos.y,
                this.mapSpects.size.w,
                this.mapSpects.size.h
            )


        } else if (this.mapSpects.color == "controles") {
            this.ctx.drawImage(
                this.image8,
                this.mapSpects.pos.x,
                this.mapSpects.pos.y,
                this.mapSpects.size.w,
                this.mapSpects.size.h
            )


        } else if (this.mapSpects.color == "portada") {
            this.ctx.drawImage(
                this.image9,
                this.mapSpects.pos.x,
                this.mapSpects.pos.y,
                this.mapSpects.size.w,
                this.mapSpects.size.h
            )


        }

        else {
            this.ctx.fillStyle = this.mapSpects.color
            this.ctx.fillRect(
                this.mapSpects.pos.x,
                this.mapSpects.pos.y,
                this.mapSpects.size.w,
                this.mapSpects.size.h)
        }
    }


}