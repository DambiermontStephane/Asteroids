import {Rgb} from "../framework/colors/Rgb";

export const settings = {
    canvas: {
        id: 'game',
    },
    ship: {
        width: 20,
        height: 40,
        speed: 0.2,
        maxSpeed: 5,
        velocity: {x: 1, y: 2.5},
        leftRotation: -Math.PI / 15,
        right: Math.PI / 15,
        color: Rgb.white,
    },
    keys: ['ArrowUp',
        'ArrowRight',
        'ArrowLeft',
        'ArrowDown',
        ' '
    ],
    bullet: {
        radius: 2,
    }

}