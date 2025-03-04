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
    let wrapperList:NodeListOf<HTMLElement> = document.querySelectorAll(".wrapper") as NodeListOf<HTMLElement>;
    wrapperList.forEach((wrapper:HTMLElement):void => {
        let shuffledArray:string[] = shuffle(symbols);
        let cellList:NodeListOf<HTMLElement> = wrapper.querySelectorAll(".cell") as NodeListOf<HTMLElement>;
        cellList.forEach((cell:HTMLElement, index:number):void =>{
            cell.innerHTML = shuffledArray[index];
        }
        )
        console.log(cellList);
        });
}