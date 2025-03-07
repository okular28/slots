import { RendererConfig } from "./renderer.config";
import {animationStart} from "../animations/animationState.ts";

const config = RendererConfig;
const kkk =  document.getElementById("dupa");
export const renderReels = ():void => {
    const machineContainer: Element = document.getElementsByClassName('machineContainer')[0];
    for (let i: number = 0; i < config.reelAmount; i++) {
        const reel: HTMLDivElement = document.createElement('div');
        reel.classList.add('reel');

        for (let i: number = 0; i < config.symbolAmount; i++) {
            const row: HTMLDivElement = document.createElement('div');
            row.classList.add('row');
            reel.appendChild(row);
        }
        machineContainer.appendChild(reel);
    }
    animationStart();
}
export const renderReelSteps = (reel):void => {
    for (let j: number = 0; j < config.symbolAmount/3; j++){
                const row: HTMLDivElement = document.createElement('div');
                row.classList.add('row');
                row.textContent = j;
                reel.removeChild(reel.lastChild);
                reel.insertBefore(row, reel.firstChild);
    }
}