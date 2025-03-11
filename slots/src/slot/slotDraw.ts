import { shuffle } from './arrayShuffle.ts'
import { RendererConfig, SymbolConfigItem } from "../render/renderer.config.ts";

/*
    * Symbol - Price
    * Diamond - 25k
    * Emerald - 20k
    * Alexandrite - 15k
    * Rubin - 10k
    * Opal - 5k
    * Sapphire - 3k
    * Tanzanite - 1k
    * Topaz - 0.5k
    * Amethyst - 0.1k
*/

export function slotDrawer(): void {
    const symbols: string[] = RendererConfig.symbolConfig.map((item: SymbolConfigItem) => item.name);
    const reelList: NodeListOf<HTMLElement> = document.querySelectorAll(".reel") as NodeListOf<HTMLElement>;

    reelList.forEach((reel: HTMLElement): void => {
        const shuffledArray: string[] = shuffle(symbols);
        const rowList: NodeListOf<HTMLElement> = reel.querySelectorAll(".row") as NodeListOf<HTMLElement>;

        rowList.forEach((row: HTMLElement, index: number): void => {
            row.classList.add(shuffledArray[index]);
        });
    });
}
