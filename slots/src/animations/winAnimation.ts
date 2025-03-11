import {RendererConfig, RendererObject} from "../render/renderer.config.ts";
import {buttonBlockWinAnimation} from "./buttonBlock.ts";
import {updateListings} from "../render/croupier.ts";

export function winAnimation():void{
    let symbol:NodeListOf<HTMLElement> = document.querySelectorAll(`.${RendererConfig.winningSymbol}`) as NodeListOf<HTMLElement>;
    symbol.forEach((reel:HTMLElement):void => {
        const anim:Animation = reel.animate(
            [
                { backgroundColor: "#cefff5"},
                { backgroundColor: "#f2a4f0" },
                { backgroundColor: "#cefff5"},
                { backgroundColor: "#f2a4f0" },
                { backgroundColor: "#cefff5" }
            ],
            {
                duration: 1000,
                easing: "ease-in-out",
            }
        );
        anim.play();
        buttonBlockWinAnimation(RendererObject.button, 1000);
    })
    updateListings();
}