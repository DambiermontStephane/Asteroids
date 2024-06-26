import {Rgb} from "../framework/colors/Rgb";

export const settings = {
    canvas: {
        gameId: 'game',
        backgroundId: 'background',
    },
    ship: {
        width: 20,
        height: 40,
        speed: 0.2,
        maxSpeed: 5,
        velocity: {x: 1, y: 2.5},
        left: -Math.PI / 15,
        right: Math.PI / 15,
        color: Rgb.white,
        friction: 0.99,
        bulletCounter: 10,


    },
    keys: ['ArrowUp',
        'ArrowRight',
        'ArrowLeft',
        'ArrowDown',
        ' '
    ],
    bullet: {
        radius: 2,
        color: Rgb.white,
        speed: 10,
    },

    asteroid: {
        width: 150,
        height: 150,
        shapes: [
            "M14.38,34.48L53.99.61l46.46,26.99,49.88,41.8-22.98,21.7-1.96,59.27-47.92-51.33-40.59,47.1-.49-70.64L.69,68.87l13.69-34.4Z",
            "M16.86,30.6L63.4.57l54.58,23.93-20.57,21.24,52.16,35.08-2.3,52.56-63.66,16.07-40.32-19.82-.57-62.65L.77,61.11l16.09-30.5Z",
            "M14.38,34.8L53.99.94l12.71,64.91,83.63,3.88-22.98,21.7-1.96,59.27-47.92-51.33-40.59,47.1-.49-70.64L.69,69.2l13.69-34.4Z"
        ],
        smallShapes: [
            "M7.49,17.4L27.15.92l6.31,31.58,41.51,1.89-11.41,10.56-.97,28.84-23.79-24.98-20.15,22.92-.24-34.37L.69,34.14l6.8-16.74Z",
            "M8.77,15.48L31.91.57l27.14,11.88-10.23,10.54,25.94,17.41-1.14,26.09-31.66,7.98-20.05-9.84-.29-31.1L.77,30.62l8-15.14Z",
            "M7.42,16.97L26.89.61l22.83,13.04,24.52,20.2-11.3,10.48-.96,28.63-23.56-24.8-19.95,22.75-.24-34.13L.69,33.58l6.73-16.62Z"
        ],
        color: Rgb.white,
        initialAsteroidCount: 4,
        minAcceleration: 1,
        maxAcceleration: 3,
        rotationSpeed: 0.02, smallWidth: 75, smallHeight: 75


    }
}


