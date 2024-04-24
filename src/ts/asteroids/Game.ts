import {settings} from "./settings";
import {Ship} from "./drawables/Ship";
import {Animate} from "./Animate";
import {KeyController} from "./KeyController";
import {Asteroid} from "./drawables/Asteroid";

export class Game {
    private readonly gameCanvas: HTMLCanvasElement;
    private readonly gameCtx: CanvasRenderingContext2D;
    private readonly ship: Ship;
    private readonly animation: Animate;
    private readonly keyController: KeyController;
    private readonly asteroids: Asteroid[] = [];
    private backgroundCanvas: HTMLCanvasElement;
    private backgroundCtx: CanvasRenderingContext2D;


    constructor() {
        this.gameCanvas = document.getElementById(settings.canvas.gameId) as HTMLCanvasElement;
        this.gameCtx = this.gameCanvas.getContext('2d');
        this.backgroundCanvas = document.getElementById(settings.canvas.backgroundId) as HTMLCanvasElement;
        this.backgroundCtx = this.gameCanvas.getContext('2d');

        this.resizeCanvas();
        window.addEventListener('resize', (e) => {
            this.resizeCanvas();
        });

        this.keyController = new KeyController();
        this.ship = new Ship(this.gameCtx, this.gameCanvas, this.keyController);

        this.animation = new Animate(this.gameCtx, this.gameCanvas);
        for (let i = 0; i < settings.asteroid.initialAsteroidCount; i++) {
            this.animation.registerForAnimation(new Asteroid(this.gameCtx, this.gameCanvas, this.ship, this.animation));
        }
        this.animation.registerForAnimation(this.ship);

        this.animation.start();
    }

    private resizeCanvas() {
        this.gameCanvas.width = Math.min(window.innerHeight, window.innerWidth) - 2;
        this.gameCanvas.height = Math.min(window.innerHeight, window.innerWidth) - 2;
    }
}