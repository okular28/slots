import { slotDrawer } from '../slot/slotDraw.ts'

export function animationStart():void {
    // const reelList:NodeListOf<HTMLElement> = document.querySelectorAll(".reel") as NodeListOf<HTMLElement>;
    const reelList:NodeListOf<HTMLElement> = document.querySelectorAll(".reel") as NodeListOf<HTMLElement>;
    const element:HTMLButtonElement = document.getElementById("animationButton") as HTMLButtonElement;
    const pauseButton = document.getElementById("pauseButton");



    element.addEventListener('click', onSpinButtonClick);
}

export function onSpinButtonClick() {
    slotDrawer();
    reelList.forEach((reel:HTMLElement, index:number):void => {
    const rowList:NodeListOf<HTMLElement> = reel.querySelectorAll(".row") as NodeListOf<HTMLElement>;
        rowList.forEach((row:HTMLElement, index:number):void => {
            const anim = row.animate(
                [
                    { top: "0px" },
                    { top: `900px` }
                ],
                {
                    delay: index*100,
                    duration: 900,
                    iterations: Infinity,
                    easing: "linear",
                }
            );
            // pauseButton?.addEventListener("click", ():void => {
            setTimeout(():void => {
                anim.pause();
            }, 2700);
            // });
            pauseButton?.addEventListener("click", ():void => {
            setTimeout(():void => {
                anim.pause();
            }, 2700);
            });
        });
    });
}