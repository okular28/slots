import { shuffle } from './arrayShuffle.ts'
export function slotDrawer():void {
    /*
    * Symbol - Price - Value
    * Diamond - 25k - 2
    * Emerald - 20k - 4
    * Alexandrite - 15k - 8
    * Rubin - 10k - 16
    * Opal - 5k - 32
    * Sapphire - 3k - 64
    * Tanzanite - 1k - 128
    * Topaz - 0.5k - 256
    * Amethyst - 0.1k - 512
    */
    const symbols: string[] = ['Rubin', 'Emerald','Alexandrite','Diamond','Opal','Sapphire','Tanzanite','Topaz','Amethyst'];
    const reelList:NodeListOf<HTMLElement> = document.querySelectorAll(".reel") as NodeListOf<HTMLElement>;
    reelList.forEach((reel:HTMLElement):void => {
        const shuffledArray:string[] = shuffle(symbols);
        const rowList:NodeListOf<HTMLElement> = reel.querySelectorAll(".row") as NodeListOf<HTMLElement>;
        rowList.forEach((row:HTMLElement, index:number):void =>{
            row.textContent = shuffledArray[index];
        })
        });
}
