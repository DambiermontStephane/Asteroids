import {IPosition} from "./types/IPosition";

export class Vectors implements IPosition {
    x: number;
    y: number;

    constructor(position: IPosition) {
        this.x = position.x;
    }

    add(vector: IPosition) {
        this.x += vector.x;
        this.y += vector.y;
    }

    multiply(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
    }

    fromAngle(alpha: number, length: number) {
        if (length === undefined) {
            length = 1;
        }
        return new Vectors({
            x: Math.cos(alpha - Math.PI / 2) * length,
            y: Math.sin(alpha - Math.PI / 2) * length,
        });

    }
}