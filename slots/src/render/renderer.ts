import { RendererConfig } from "./renderer.config";
import {animationStart} from "../animations/animationState.ts";
let indexCounter = 0;

const config = RendererConfig;
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
export const renderReelSteps = (reel, index):void => {
    indexCounter++;
    if(config.reelIndex+3<config.reelLength){
        let reelIndexAdder:number = 0;
        for (let j: number = 0; j < config.symbolAmount/3; j++) {
            const row: HTMLDivElement = document.createElement('div');
            row.classList.add('row');
            const symbolObject:object = config.symbolConfig.find((item:object):boolean => item.id === config.reelSet[index][config.reelIndex+reelIndexAdder]);
            if (symbolObject && !row.classList.contains(symbolObject.name)) {
                row.classList.add(symbolObject.name);
            }
            reel.removeChild(reel.lastChild);
            reel.insertBefore(row, reel.firstChild);
            reelIndexAdder++;
        }
        if(indexCounter%5==0){
            config.reelIndex=config.reelIndex+3;
        }
    } else {
        config.reelIndex = 0;
    }
}
//3,4,5, 18,19,20