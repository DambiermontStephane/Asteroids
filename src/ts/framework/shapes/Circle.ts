import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/IPosition";

export class Circle extends Shape {
    private readonly radius: number;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, radius: number, color: IColor, degree: number = 0, isFilled: boolean = true) {
        super(ctx, position, color, degree, isFilled);
        this.radius = radius;
    }

    public draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.fillOrStroke();
    }

    public clear() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.degree);
        if (this.isFilled) {
            this.ctx.clearRect(-this.radius, -this.radius, this.radius, this.radius);
        } else {
            //ToDo:implement
        }
        this.ctx.restore();
    }
}