import {renderReelSteps} from "../render/renderer.ts";
import  { RendererConfig } from "../render/renderer.config.ts";
import  { RendererObject } from "../render/renderer.config.ts";
import {buttonBlock} from "./buttonBlock.ts";
import {drawCombination} from "../slot/slotCombinations.ts";
import {CroupierConfig, updateCurrentCash, updateListings} from "../render/croupier.ts";


const element:HTMLButtonElement = RendererObject.button;
let reelList:NodeListOf<HTMLElement> = document.querySelectorAll(".reel") as NodeListOf<HTMLElement>;
export function animationStart():void {
    if(CroupierConfig.currentCash > 1000){
        element.addEventListener('click', onSpinButtonClick);
        reelList = document.querySelectorAll(".reel") as NodeListOf<HTMLElement>;
    } else alert("You ran out of money")
}

export function onSpinButtonClick():void {
    updateCurrentCash(CroupierConfig.bid, true);
    updateListings();
    buttonBlock(element, RendererConfig.animationTime);
    drawCombination();
    reelList.forEach((reel:HTMLElement, index:number):void => {
        let currentIteration:number = 1;
            const anim:Animation = reel.animate(
                [
                    { top: "0px" },
                    { top: `300px` }
                ],
                {
                    delay: index*30,
                    duration: RendererConfig.iterationTime,
                    easing: "linear",
                }
            );
        anim.onfinish = ():void => {
            currentIteration++;
            // TODO: zrobić to z promisem (?), przy większym delayu między startem kolumn rendering na siebie nachodzi (0, 1, 2, 0, 3, 1, 4... zamiast 0, 1, 2, 3, 0 ,1...)
            renderReelSteps(reel, index)
            if (currentIteration < RendererConfig.iterationCount) {
                if (currentIteration == 2) {
                    anim.effect.updateTiming({delay: 0});
                }
                anim.play();
            }
        }
    });
}
