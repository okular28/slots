// 1. line (variations: 3, 4, 5)
// 2. V (variations: up and down facing)
// 3. U (variations: up and down facing)
// 4. zigzag (variations: up/down, down/up)
import  { RendererConfig } from "../render/renderer.config.ts";
const combinations:number[][] = [
    [0, 0, 0],//line 3x
    [0, 0, 0, 0],// line 4x
    [0, 0, 0, 0, 0],//line 5x
    [0, 1, 1, 1, 0],//U
    [0, 1, 0, 1, 0],//zigzag
    [0, 1, 2, 1, 0]//V
]

const combinationsConfig:object[] = [
    {
        //line 3x
        id: 0,
        maxStartingPointX: 2,
        maxStartingPointY: 2,
        variations: null
    },
    {
        // line 4x
        id: 1,
        maxStartingPointX: 1,
        maxStartingPointY: 2,
        variations: null
    },
    {
        //line 5x
        id: 2,
        maxStartingPointX: 0,
        maxStartingPointY: 2,
        variations: null
    },
    {
        //U
        id: 3,
        maxStartingPointX: 0,
        maxStartingPointY: 1,
        variations: 2
    },
    {
        //zigzag
        id: 4,
        maxStartingPointX: 0,
        maxStartingPointY: 1,
        variations: 2
    },
    {
        //V
        id: 5,
        maxStartingPointX: 0,
        maxStartingPointY: 0,
        variations: 2
    }
]
export function slotCombinations():void{
    const combination = combinationVariationDrawer();
    let placement;
    if(combination != null){
        placement = combinationPlacement(combination);
    }
    drawCombination(combination, placement);
}

export function  drawCombination(combinationIndex:number | null, positionArray:number[] | null){
    // return new Promise<void>((resolve):void => {
        // setTimeout(():void => {
            // console.log(positionArray);
            // if(positionArray!=null){
            //     console.log(positionArray[0],positionArray[1]);
            // }
    const winningSymbol:number = Math.floor(Math.random() * RendererConfig.symbolAmount);
    console.log(winningSymbol, positionArray, combinations[combinationIndex]);
    for (let currentReel:number = 0; currentReel< RendererConfig.reelAmount; currentReel++){
        let ids:number[] = RendererConfig
            .symbolConfig.map(item => item.id)
            .filter(id => id !== winningSymbol);
        let singleReelSymbols:number[] = [];
        for (let currentRow:number = 0; currentRow< 3; currentRow++) {
            const chosenSymbol = Math.floor(Math.random() * ids.length)
            singleReelSymbols.push(ids[chosenSymbol])
            ids.splice(chosenSymbol, 1)
            if (combinationIndex != null && positionArray != null) {
                const [startX, startY] = positionArray;
                if (currentReel >= startX){
                    console.log(combinations[combinationIndex][currentReel]+startY, currentRow, (currentRow == combinations[combinationIndex][currentReel]+startY));
                    console.log(singleReelSymbols[currentRow], winningSymbol)
                    // currentReel < startX + combinations[combinationIndex].length)
                    if(currentRow == combinations[combinationIndex][currentReel]+startY){
                        singleReelSymbols[currentRow] = winningSymbol;
                    }
                }
                // if (currentReel >= startX && currentReel < startX + combinations[combinationIndex].length) {
                //     const rowIndex = combinations[combinationIndex][currentReel - startX];
                //     if (rowIndex >= 0 && rowIndex < 3 && startY + rowIndex < 3) {
                //         singleReelSymbols[startY + rowIndex] = winningSymbol;
                //     }
                // }
            }
        }
        RendererConfig.winningCombination.push(singleReelSymbols);
    }
        //     resolve();
        // }, 20);
// });
}
export function combinationVariationDrawer():number|null{
    const result:number = Math.floor(Math.random() * 201);
    switch(true) {
        case (result>=195):
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
            console.log('none');
            return null;
    }
}

export function combinationPlacement(combinationId){
    const combination = combinationsConfig[combinationId];
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
