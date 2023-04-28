const basicShapesApp = {
    appName: "",
    author: "Ana Guardado & Jaime Boukhrij",
    canvasSize: {
        w: 15500,
        h: 1080
    },
    map: [],
    players: [],
    enemies: [],
    background: [],
    imgPrinc: undefined,
    imgPrinc2: undefined,
    imgPrinc3: undefined,
    imgPrinc4: undefined,
    framesCounter: 0,
    botomStart: false,
    fps: 30,
    backgroundaudio: new Audio('./sound/animal-crossing-them.mp3'),

    init() {
        this.reset()
        this.setContext()
        this.createBackground()
        this.createMap()
        this.createPlayer()
        this.createEnemies()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },
    start() {


        this.interval = setInterval(() => {
            this.setEventListeners()
            if (!this.botomStart) this.initialImage()
            else {
                this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
                this.clearAll()
                this.drawAll()
                //    this.again()
            }
            this.players.forEach(player => {
                if (player.gameOver() || player.finish()) this.botomStart = false
            })

        }, 1000 / this.fps)

    },

    setEventListeners() {
        document.onkeydown = ({ key }) => {

            if (key == 'c' || key == "C") {
                this.botomStart = true
                this.reset()
                clearInterval(this.interval)
                this.init()
                this.backgroundaudio.play()
            }




        }
    },
    drawAll() {
        this.drawBackground()
        this.drawEnemies()
        this.drawPlayers(this.framesCounter)
        this.drawMap()

    },
    drawMap() {
        this.map.forEach(elm => elm.draw())
    },
    drawPlayers() {
        this.players.forEach(elm => elm.draw())

    },
    drawEnemies() {
        this.enemies.forEach(elm => elm.draw())
    },
    drawBackground() {
        this.background.forEach(elm => {
            elm.draw()
        })
    },
    createBackground() {
        this.background.push(new Background(this.ctx))
    },
    createMap() {
        this.map.push(
            //0
            new Map(this.ctx, "tuberias", 0, 630, 200, 275, 2),
            new Map(this.ctx, "tuberias", 1829, 824, 135, 72, 3),
            new Map(this.ctx, "tuberias", 2450, 824, 165, 72, 5),
            new Map(this.ctx, "tuberias", 2580, 760, 350, 137, 6),
            new Map(this.ctx, "tuberias", 3115, 760, 150, 137, 9),
            new Map(this.ctx, "tuberias", 3450, 820, 90, 70, 10),
            new Map(this.ctx, "tuberias", 3790, 680, 120, 220, 13),
            new Map(this.ctx, "tuberias", 4340, 680, 120, 220, 14),
            new Map(this.ctx, "tuberias", 5650, 830, 300, 70, 20),
            new Map(this.ctx, "tuberias", 6000, 760, 300, 200, 21),
            new Map(this.ctx, "tuberias", 6350, 580, 300, 500, 22),
            //10
            new Map(this.ctx, "tuberias", 6700, 400, 300, 600, 23),
            new Map(this.ctx, "tuberias", 8550, 680, 120, 220, 30),
            new Map(this.ctx, "tuberias", 9500, 825, 100, 100, 32),
            new Map(this.ctx, "tuberias", 9600, 760, 200, 200, 33),
            new Map(this.ctx, "tuberias", 14000, 800, 100, 100, 41),
            new Map(this.ctx, "tuberias", 14125, 710, 100, 200, 42),
            new Map(this.ctx, "tuberias", 14275, 610, 100, 300, 43),
            new Map(this.ctx, "tuberias", 14400, 510, 100, 400, 44),
            new Map(this.ctx, "platform", 900, 600, 280, 80, 4),
            new Map(this.ctx, "platform", 2650, 500, 200, 51, 7),
            //20
            new Map(this.ctx, "platform", 3700, 810, 90, 90, 12),
            new Map(this.ctx, "platform", 4025, 675, 150, 51, 16),
            new Map(this.ctx, "platform", 4250, 810, 90, 90, 15),
            new Map(this.ctx, "platform", 5250, 675, 300, 51, 19),
            new Map(this.ctx, "platform", 7300, 810, 90, 90, 25),
            new Map(this.ctx, "platform", 7800, 675, 300, 51, 28),
            new Map(this.ctx, "platform", 8455, 810, 90, 90, 29),
            new Map(this.ctx, "platform", 10000, 700, 300, 51, 34),
            new Map(this.ctx, "platform", 10500, 800, 300, 51, 37),
            new Map(this.ctx, "platform", 11000, 700, 300, 51, 35),
            //30
            new Map(this.ctx, "platform", 11500, 600, 300, 51, 36),
            new Map(this.ctx, "platform", 12500, 700, 200, 51, 39),
            new Map(this.ctx, "platform", 13500, 700, 200, 51, 40),
            new Map(this.ctx, "platform", 14800, 700, 200, 51, 45),
            new Map(this.ctx, "tramp", 3265, 850, 185, 51, 49),
            new Map(this.ctx, "tramp", 3540, 850, 185, 51, 50),
            new Map(this.ctx, "salida", 500, 200, 200, 200, 200),
            new Map(this.ctx, "trophy", 15500, 300, 300, 650, 48),
            new Map(this.ctx, "ground", 0, 886, 2930, this.canvasSize.h, 1),
            new Map(this.ctx, "ground", 3115, 886, 1000, this.canvasSize.h, 8),
            //40
            new Map(this.ctx, "ground", 3700, 886, 1000, this.canvasSize.h, 11),
            new Map(this.ctx, "ground", 4850, 886, 150, this.canvasSize.h, 17),
            new Map(this.ctx, "ground", 5150, 886, 1950, this.canvasSize.h, 18),
            new Map(this.ctx, "ground", 7300, 886, 1, this.canvasSize.h, 24),
            new Map(this.ctx, "ground", 7301, 886, 1100, this.canvasSize.h, 26),
            new Map(this.ctx, "ground", 8400, 886, 300, this.canvasSize.h, 27),
            new Map(this.ctx, "ground", 9000, 886, 800, this.canvasSize.h, 31),
            new Map(this.ctx, "ground", 12000, 886, 2500, this.canvasSize.h, 38),
            new Map(this.ctx, "ground", 15300, 886, 900, this.canvasSize.h, 46),
            new Map(this.ctx, "ground", 16000, 200, 100, 700, 47),
            //50

        )
    },
    createPlayer() {
        this.players.push(
            new Player(this.ctx, this.canvasSize, this.map, this.enemies, this.framesCounter))
    },
    createEnemies() {
        this.enemies.push(
            new Enemies(this.ctx, 1970, 820, 70, 70, 10, 0, 'sierra', 1, this.map),
            new Enemies(this.ctx, 4000, 820, 70, 70, 10, 0, 'sierra', 2, this.map),
            new Enemies(this.ctx, 7450, 820, 70, 70, 10, 0, 'sierra', 3, this.map),
            new Enemies(this.ctx, 12100, 820, 70, 70, 10, 0, 'sierra', 4, this.map),
            new Enemies(this.ctx, 13800, 820, 70, 70, 10, 0, 'sierra', 5, this.map),
            new Enemies(this.ctx, 1845, 850, 90, 150, 20, -5, 'planta', 6, this.map),
            new Enemies(this.ctx, 3797, 850, 90, 150, 20, -5, 'planta', 7, this.map),
            new Enemies(this.ctx, 9650, 800, 100, 160, 54, -4, "planta", 9, this.map),
            new Enemies(this.ctx, 6722, 400, 240, 300, 20, -6, 'bowser', 8, this.map),
            new Enemies(this.ctx, 9190, 817, 75, 75, 12, 0, "galleta", 10, this.map),
            new Enemies(this.ctx, 6075, 800, 140, 150, 52, -4, "mini", 11, this.map),
        )
    },

    reset() {
        this.players = [],
            this.enemies = [],
            this.background = [],
            this.map = [],
            this.framesCounter = 0,
            this.fps = 30
    },

    initialImage() {

        this.imgPrinc2 = new Image()
        this.imgPrinc2.src = "./img/portada.png"
        this.ctx.drawImage(
            this.imgPrinc2,
            0, 0, 1920, 1080
        )

    },

    clearAll() {

        this.ctx.clearRect(0,
            0,
            99999,
            1080,
        )
    },
}
