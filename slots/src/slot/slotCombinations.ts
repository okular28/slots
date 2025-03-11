import  { RendererConfig } from "../render/renderer.config.ts";
import {insertLastCombination} from "./lastCombinationInserter.ts";

const combinations:number[][] = [
    [0, 0, 0],//line 3x
    [0, 0, 0, 0],// line 4x
    [0, 0, 0, 0, 0],//line 5x
    [0, 1, 1, 1, 0],//U
    [0, 1, 0, 1, 0],//zigzag
    [0, 1, 2, 1, 0],//V
    [1, 0, 0, 0, 1],//U-flipped
    [1, 0, 1, 0, 1],//zigzag-flipped
    [2, 1, 0, 1, 2],//V-flipped
]

const combinationsConfig:object[] = [
    {
        //line 3x
        id: 0,
        maxStartingPointX: 2,
        maxStartingPointY: 2,
        multiplier: 1.2
    },
    {
        // line 4x
        id: 1,
        maxStartingPointX: 1,
        maxStartingPointY: 2,
        multiplier: 1.5
    },
    {
        //line 5x
        id: 2,
        maxStartingPointX: 0,
        maxStartingPointY: 2,
        multiplier: 2
    },
    {
        //U
        id: 3,
        maxStartingPointX: 0,
        maxStartingPointY: 1,
        multiplier: 2.2
    },
    {
        //zigzag
        id: 4,
        maxStartingPointX: 0,
        maxStartingPointY: 1,
        multiplier: 3
    },
    {
        //V
        id: 5,
        maxStartingPointX: 0,
        maxStartingPointY: 0,
        multiplier: 5
    },
    {
        //U-flipped
        id: 6,
        maxStartingPointX: 0,
        maxStartingPointY: 1,
        multiplier: 2.2
    },
    {
        //zigzag-flipped
        id: 7,
        maxStartingPointX: 0,
        maxStartingPointY: 1,
        multiplier: 3
    },
    {
        //V-flipped
        id: 8,
        maxStartingPointX: 0,
        maxStartingPointY: 0,
        multiplier: 5
    }
]

export function drawCombination():void{
    const combination:number | null = combinationVariationDrawer();
    const placement:number[] | [] = combinationPlacement(combination);
    let singleReelSymbols:number[] = [];
    let singlePreviousReelArray:number[] | [] = [];
    const winningSymbol:number = getWinningSymbol(combination);
    for (let currentReel:number = 0; currentReel< RendererConfig.reelAmount; currentReel++){
    const ids:number[] = getFillers(combination, winningSymbol);
        for (let currentRow:number = 0; currentRow< 3; currentRow++) {
            let chosenSymbol:number = Math.floor(Math.random() * ids.length)
            while (singlePreviousReelArray[currentRow] === ids[chosenSymbol]) {
                chosenSymbol = Math.floor(Math.random() * ids.length)
            }
            singleReelSymbols.push(ids[chosenSymbol])
            ids.splice(chosenSymbol, 1)
            if(combination != null){
                alterWinningCombination(winningSymbol, currentReel, currentRow, placement, combination, singleReelSymbols);
            }
        }
    RendererConfig.winningCombination.push(singleReelSymbols);
        singlePreviousReelArray = singleReelSymbols.map((inner:number) => inner);
        singleReelSymbols = [];
    }
    if(combination != null){
        RendererConfig.winningSymbolPrice = RendererConfig.symbolConfig[winningSymbol].price;
        RendererConfig.winningCombinationMultiplier = combinationsConfig[combination].multiplier;
    }
    insertLastCombination();
}
export function combinationVariationDrawer():number|null{
    const result:number = Math.floor(Math.random() * 231);
    switch(true) {
        case (result>=225):
            return 8;
        case (result>=210):
            return 7;
        case (result>=195):
            return 6;
        case (result>=190):
            return 5;
        case (result>=180):
            return 4;
        case (result>=170):
            return 3;
        case (result>=155):
            return 2;
        case (result>=140):
            return 1;
        case (result>=120):
            return 0;
        default:
            return null;
    }
}

function getWinningSymbol(combination){
    const win:number=  Math.floor(Math.random() * RendererConfig.symbolAmount);
    if(combination != null){
        RendererConfig.winningSymbol = RendererConfig.symbolConfig[win].name;
    } else RendererConfig.winningSymbol = 'none';
    return win;
}
export function combinationPlacement(combinationId): any[]{
    if(combinationId == null){
        return [];
    }
    const combination:object = combinationsConfig[combinationId];
    let posX;
    let posY;
    if(Object.values(combination)[1] == 0){
        posX = 0;
    }else{
        posX = Math.floor(Math.random() * ((Object.values(combination)[1])+1));
    }
    if(Object.values(combination)[2] == 0){
        posY = 0;
    }else{
        posY = Math.floor(Math.random() * ((Object.values(combination)[2])+1));
    }
    return [posX, posY];
}

export function getFillers(combination, winningSymbol):number[] | [] {
    if (combination != null) {
        return RendererConfig
            .symbolConfig.map((item:object) => item.id)
            .filter(id => id !== winningSymbol);
    } else return RendererConfig.symbolConfig.map((item:object) => item.id);
}

export function alterWinningCombination(winningSymbol: number, currentReel: number, currentRow: number, placement: number[], combination: number, singleReelSymbols: number[]):void {
    const [startX, startY] = placement;

    if (currentReel >= startX && currentReel < startX + combinations[combination].length) {
        const reelOffset:number = currentReel - startX;
        const rowIndex:number = combinations[combination][reelOffset];
        const targetRow:number = rowIndex + startY;

        if (currentRow === targetRow && targetRow < singleReelSymbols.length) {
            singleReelSymbols[targetRow] = winningSymbol;
        }
    }
}