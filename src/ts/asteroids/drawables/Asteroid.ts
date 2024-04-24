import {Rectangle} from "../../framework/shapes/Rectangle";
import {IAnimatable} from "../../framework/types/IAnimatable";
import {Vector} from "../../framework/Vector";
import {Random} from "../../framework/helpers/Random";
import {settings} from "../settings";
import {Collision} from "../../framework/helpers/Collision";
import {Ship} from "./Ship";
import {Rgb} from "../../framework/colors/Rgb";
import {Animate} from "../Animate";

export class Asteroid extends Rectangle implements IAnimatable {
    private readonly path: Path2D;
    private readonly acceleration: Vector;
    private readonly speed: Vector;
    private readonly canvas: HTMLCanvasElement;
    private readonly ship: Ship;
    private readonly animation: Animate;
    private parent: Asteroid;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, ship: Ship, animation: Animate, parent?: Asteroid) {
        super(
            ctx,
            parent ? new Vector({x: parent.position.x, y: parent.position.y}) :
                new Vector({
                    x: Random.int(0, canvas.width), y: Random.int(0, canvas.height)
                }),
            parent ? settings.asteroid.width : settings.asteroid.smallWidth,
            parent ? settings.asteroid.height : settings.asteroid.smallHeight,
            settings.asteroid.color,
            Random.float(0, 2 * Math.PI));
        this.path = parent ? new Path2D(settings.asteroid.smallShapes[Random.int(0, settings.asteroid.shapes.length - 1)]) : new Path2D(settings.asteroid.shapes[Random.int(0, settings.asteroid.smallShapes.length - 1)]);

        this.shouldBeRemoved = false;
        this.speed = new Vector({x: 0, y: 0});
        this.acceleration = Vector.fromAngle(this.degree, Random.int(settings.asteroid.minAcceleration, settings.asteroid.maxAcceleration));
        this.speed.add(this.acceleration);
        this.canvas = canvas;
        this.ship = ship;
        this.animation = animation;
        this.parent = parent;
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.degree);
        this.ctx.translate(-this.width / 2, -this.height / 2)
        this.ctx.strokeStyle = this.color.toString();
        this.ctx.stroke(this.path);
        this.ctx.restore();
    }

    update() {
        (this.position as Vector).add(this.speed);
        this.degree += settings.asteroid.rotationSpeed;
        Collision.checkEdges(this, this.canvas);
        this.checkCollisionWithBullets();
    }

    clear() {
    }

    checkCollisionWithBullets() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.degree);
        this.ctx.translate(-this.width / 2, -this.height / 2)

        this.ship.bullets.forEach((bullet) => {
            if (this.ctx.isPointInPath(this.path, bullet.position.x, bullet.position.y)) {
                this.animation.registerForAnimation(new Asteroid(this.ctx, this.canvas, this.ship, this.animation, this))
                this.shouldBeRemoved = true;
            }
        })

        this.ctx.restore();
    }

    shouldBeRemoved: boolean;
}