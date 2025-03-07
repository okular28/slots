import { slotDrawer } from '../slot/slotDraw.ts'
import {renderReelSteps} from "../render/renderer.ts";
const element:HTMLButtonElement = document.getElementById("animationButton") as HTMLButtonElement;
let reelList:NodeListOf<HTMLElement> = document.querySelectorAll(".reel") as NodeListOf<HTMLElement>;
export function animationStart():void {
    element.addEventListener('click', onSpinButtonClick);
    reelList = document.querySelectorAll(".reel") as NodeListOf<HTMLElement>;
}

export function onSpinButtonClick():void {

    reelList.forEach((reel:HTMLElement, index:number):void => {
        let currentIteration:number = 0;
        const totalIterations:number = 5;
            const anim:Animation = reel.animate(
                [
                    { top: "0px" },
                    { top: `300px` }
                ],
                {
                    delay: index*100,
                    duration: 900,
                    iterations: 1,
                    easing: "linear",
                }
            );

        anim.onfinish = ():void => {
            currentIteration++;
            renderReelSteps(reel);
            if (currentIteration < totalIterations) {
                if (currentIteration == 1) {
                    anim.effect.updateTiming({delay: 0});
                }
                if (currentIteration < totalIterations) {
                    anim.play();
                }
            }
    }
});
}
