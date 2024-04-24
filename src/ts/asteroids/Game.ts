import {settings} from "./settings";
import {Ship} from "./drawables/Ship";
import {Animate} from "./Animate";
import {KeyController} from "./KeyController";
import {Asteroid} from "./drawables/Asteroid";

export class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly ship: Ship;
    private readonly animation: Animate;
    private readonly keyController: KeyController;
    private readonly asteroids: Asteroid[] = [];


    constructor() {
        this.canvas = document.getElementById(settings.canvas.id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');

        this.resizeCanvas();
        window.addEventListener('resize', (e) => {
            this.resizeCanvas();
        });

        this.keyController = new KeyController();
        this.ship = new Ship(this.ctx, this.canvas, this.keyController);

        this.animation = new Animate(this.ctx, this.canvas);
        for (let i = 0; i < settings.asteroid.initialAsteroidCount; i++) {
            this.animation.registerForAnimation(new Asteroid(this.ctx, this.canvas, this.ship, this.animation));
        }
        this.animation.registerForAnimation(this.ship);

        this.animation.start();
    }

    private resizeCanvas() {
        this.canvas.width = Math.min(window.innerHeight, window.innerWidth) - 2;
        this.canvas.height = Math.min(window.innerHeight, window.innerWidth) - 2;
    }
}