import {Triangle} from "../../framework/shapes/Triangle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {settings} from "../settings";
import {KeyController} from "../KeyController";


export class Ship extends Triangle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private keyController: KeyController;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, keyController: KeyController) {
        super(ctx, canvas.width / 2, canvas.height / 2, settings.ship.width, settings.ship.height, settings.ship.color, false);
        this.canvas = canvas;
        this.keyController = keyController;
        this.draw();
    }

    update(): void {
        console.log(this.keyController.activeKeys);
        this.y += 2;
        if (this.x - this.width / 2 >= this.canvas.width) {
            this.x = -this.width / 2;
        } else if (this.x + this.width / 2 <= 0) {
            this.x = this.canvas.width + this.width / 2;
        } else if (this.y + this.height / 2 <= 0) {
            this.y = this.canvas.height + this.height / 2;
        } else if (this.y - this.height / 2 >= this.canvas.height) {
            this.y = -this.height / 2
        }
    }

}