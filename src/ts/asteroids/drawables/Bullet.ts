import {Circle} from "../../framework/shapes/Circle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {IPosition} from "../../framework/types/IPosition";
import {IColor} from "../../framework/types/IColor";

export class Bullet extends Circle implements IAnimatable, IPosition {

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, radius: number, color: IColor, degree: number, isFilled: boolean) {
        super(ctx, position, radius, color, degree, isFilled);

    }

    clear(): void {
    }

    update(): void {
    }

    x: number;
    y: number;
}