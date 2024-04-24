import {Circle} from "../../framework/shapes/Circle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {IPosition} from "../../framework/types/IPosition";
import {Vector} from "../../framework/Vector";
import {settings} from "../settings";

export class Bullet extends Circle implements IAnimatable {
    private readonly canvas: HTMLCanvasElement;
    private readonly speed: Vector;
    shouldBeRemoved: boolean;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, degree: number, speed: Vector) {
        super(ctx, new Vector(position), settings.bullet.radius, settings.bullet.color, degree, false);
        this.speed = new Vector(speed);
        this.update()
        this.shouldBeRemoved = false;
    }

    update(): void {
        //ToDo shouldBeRemoved with a test here !
        this.speed.add(Vector.fromAngle(this.degree, settings.bullet.speed));
        (this.position as Vector).add(this.speed)
    }

    clear(): void {
    }
}