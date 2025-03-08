import  { RendererObject } from "../render/renderer.config.ts";
export function buttonBlock (button, time:number):void{
    button.disabled = !button.disabled;
    setTimeout(():void => {
        button.disabled = !button.disabled;
    },  time);
    console.log(button.disabled);
}