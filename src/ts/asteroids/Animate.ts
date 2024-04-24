import {IAnimatable} from "../framework/types/IAnimatable";

export class Animate {
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvas: HTMLCanvasElement;
    private iAnimates: IAnimatable[];
    private shouldBeRemovedIdx: number[];

    constructor(ctx?: CanvasRenderingContext2D, canvas?: HTMLCanvasElement) {
        this.iAnimates = [];
        this.ctx = ctx;
        this.canvas = canvas;
        this.shouldBeRemovedIdx = [];
    }

    public start() {
        this.animate();
    }

    private animate() {
        requestAnimationFrame(this.animate.bind(this));

        if (this.canvas !== undefined && this.ctx !== undefined) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        this.iAnimates.forEach((iAnimate, idx) => {
            if (iAnimate.shouldBeRemoved) {
                this.shouldBeRemovedIdx.push(idx);
            } else {
                if (this.canvas === undefined || this.ctx === undefined) {
                    iAnimate.clear();
                }
                iAnimate.update();
                iAnimate.draw();
            }
        });

        this.shouldBeRemovedIdx.forEach((idx) =>  {
            this.iAnimates.splice(idx, 1);
        });

        this.shouldBeRemovedIdx.length = 0; // Nettoyage en pression du tableau.
    }

    registerForAnimation(iAnimatable: IAnimatable) {
        this.iAnimates.push(iAnimatable);
    }
}