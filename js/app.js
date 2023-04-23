const basicShapesApp = {
    appName: "",
    author: "Ana Guardado & Jaime Boukhrij",
    canvasSize: {
        w: window.innerWidth,
        h: 1080
    },
    players: [],

    init() {
        this.setContext()
        this.createPlayer()
        this.start()

    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 50)
    },


    drawAll() {
        this.drawPlayers()
        this.drawMap()
    },

    createPlayer() {
        this.players.push(
            new Player(
                this.ctx,
                this.canvasSize))


    },

    drawPlayers() {
        this.players.forEach(elm => elm.draw())
    },

    drawMap() {

        // plataforma principal
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(0, 886, this.canvasSize.w, this.canvasSize.h);

        //primera plataforma
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 610, 200, 275);

        //segunda plataforma
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(1629, 814, 135, 72);

        //primera plataforma flotante
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(660, 692, 410, 65);

        //tercera plataforma
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(2000, 720, 200, 200);

        //cuarta plataforma
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(900, 820, 150, 347);

        //segunda plataforma flotante
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(2600, 550, 200, 45);

    },

    clearAll() {
        this.ctx.clearRect(0,
            0,
            window.innerWidth,
            1080,
        )

    },




}
