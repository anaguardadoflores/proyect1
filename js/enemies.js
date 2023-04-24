class enemies{
    constructor (ctx){
        this.ctx = ctx;
        this.enemiesSpects = {
            size: { w: 63, h: 70 },
            pos: { x: 400, y: 813 },
        }
        this.cavasSize = canvasSize;
        this.init()
    }
    init(){
        
    }

    draw() {
        this.ctx.fillStyle = "gray"
        this.ctx.fillRect(
            this.playerSpects.pos.x,
            this.playerSpects.pos.y,
            this.playerSpects.size.w,
            this.playerSpects.size.h)
    }
}



