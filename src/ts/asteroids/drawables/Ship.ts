import {Triangle} from "../../framework/shapes/Triangle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {settings} from "../settings";
import {KeyController} from "../KeyController";
import {Vectors} from "../../framework/Vectors";


export class Ship extends Triangle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private keyController: KeyController;
    private speed: Vectors;
    private direction: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyController: KeyController) {
        super(ctx, {
            x: canvas.width / 2,
            y: canvas.height / 2
        }, settings.ship.width, settings.ship.height, settings.ship.color, 0, false);
        this.canvas = canvas;
        this.speed = new Vectors({
            x: 0,
            y: 0,
        });
        this.keyController = keyController;
        this.draw();
    }

    update(): void {
        //this.checkEdges();
    }

    private checkEdges() {
        if (this.position.x - this.width / 2 >= this.canvas.width) {
            this.position.x = -this.width / 2;
        } else if (this.position.x + this.width / 2 <= 0) {
            this.position.x = this.canvas.width + this.width / 2;
        } else if (this.position.y + this.height / 2 <= 0) {
            this.position.y = this.canvas.height + this.height / 2;
        } else if (this.position.y - this.height / 2 >= this.canvas.height) {
            this.position.y = -this.height / 2
        }
    }
}