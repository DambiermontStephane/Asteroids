import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/IPosition";
import {IRectangle} from "../types/IRectangle";

export class Rectangle extends Shape implements IRectangle{
    public width: number;
    public height: number;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, width: number, height: number, color: IColor, orientation: number = 0, isFilled: boolean = true) {
        super(ctx, position, color, orientation, isFilled);
        this.width = width;
        this.height = height;
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);
        this.ctx.rotate(this.degree * Math.PI / 180);
        this.ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
        this.fillOrStroke();
        this.ctx.restore();
    }
}