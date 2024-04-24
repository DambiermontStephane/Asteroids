export interface IAnimatable {
    draw():void;
    update():void;
    clear():void;
    shouldBeRemoved:boolean;
}