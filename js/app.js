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

        // primera plataforma principal 
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(0, 886, 2930, this.canvasSize.h);

        //primera plataforma
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 610, 200, 275);

        //segunda plataforma
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(1829, 814, 135, 72);

        //primera plataforma flotante
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(660, 692, 410, 65);

        //tercera plataforma
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(2450, 814, 135, 72);

        //cuarta plataforma
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(2580, 750, 350, 137);

        //segunda plataforma flotante
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(2650, 600, 200, 45);

        // segunda plataforma principal 
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(3115, 1050, 600, this.canvasSize.h);

        //quinta plataforma
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(3115, 917, 150, 137);

        //sexta plataforma
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(3450, 980, 90, 70);

        // tercera plataforma principal 
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(3700, 900, 1000, this.canvasSize.h);

        //septima plataforma
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(3700, 810, 90, 90);

        //primera tuberia
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(3790, 680, 120, 220);

        //segunda tuberia
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(4340, 680, 120, 220);

        //octava plataforma
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(4250, 810, 90, 90);

        //tercera plataforma flotante
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(4025, 675, 150, 45);

        // cuarta plataforma principal 
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(4850, 900, 150, this.canvasSize.h);

        // quinta plataforma principal 
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(5150, 900, 1950, this.canvasSize.h);

        //cuarta plataforma flotante
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(5250, 675, 300, 45);

        //novena plataforma
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(5650, 830, 1050, 70);

        //decima plataforma
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(5950, 760, 750, 70);

        //undecima plataforma
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(6300, 580, 400, 180);

        // //duodecima plataforma
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(6700, 580, 400, 70);

        // quinta plataforma principal 
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(7300, 900, 150, this.canvasSize.h);

        //decimotercera plataforma
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(7300, 810, 90, 90);

        // //decimocuarta plataforma
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(7450, 900, 1000, 50);

        // sexta plataforma principal 
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(8400, 900, 300, this.canvasSize.h);

        //quinta plataforma flotante
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(7800, 675, 300, 45);

        //decimoquinta plataforma
        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(8455, 810, 90, 90);

        //tercera tuberia
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(8550, 680, 120, 220);

        // septima plataforma principal 
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(9000, 900, 800, this.canvasSize.h);

        //decimosexta plataforma
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(9290, 830, 500, 70);

        //decimoseptima plataforma
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(9490, 760, 300, 70);

    },

    clearAll() {
        this.ctx.clearRect(0,
            0,
            window.innerWidth,
            1080,
        )

    },




}
