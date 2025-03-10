// 1. line (variations: 3, 4, 5)
// 2. V (variations: up and down facing)
// 3. U (variations: up and down facing)
// 4. zigzag (variations: up/down, down/up)
import  { RendererConfig } from "../render/renderer.config.ts";
const combinations:number[][] = [
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 2, 1, 0]
]

const combinationsConfig:object[] = [
    {
        id: 0,
        maxStartingPointX: 2,
        maxStartingPointY: 2,
        variations: null
    },
    {
        id: 1,
        maxStartingPointX: 1,
        maxStartingPointY: 2,
        variations: null
    },
    {
        id: 2,
        maxStartingPointX: 0,
        maxStartingPointY: 2,
        variations: null
    },
    {
        id: 3,
        maxStartingPointX: 0,
        maxStartingPointY: 1,
        variations: 2
    },
    {
        id: 4,
        maxStartingPointX: 0,
        maxStartingPointY: 0,
        variations: 2
    },
    {
        id: 5,
        maxStartingPointX: 0,
        maxStartingPointY: 1,
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

export async function  drawCombination(combinationIndex, positionArray):Promise<void>{
    // return new Promise<void>((resolve):void => {
        // setTimeout(():void => {
            // console.log(positionArray);
            // if(positionArray!=null){
            //     console.log(positionArray[0],positionArray[1]);
            // }
    const winningSymbol:number = Math.floor(Math.random() * RendererConfig.symbolAmount);
    for (let currentReel:number = 0; currentReel< RendererConfig.reelAmount; currentReel++){
        let ids:number[] = RendererConfig
            .symbolConfig.map(item => item.id)
            .filter(id => id !== winningSymbol);
        let singleReelSymbols:number[] = [];
        for (let currentRow:number = 0; currentRow< 3; currentRow++){
            singleReelSymbols.push(ids[Math.floor(Math.random()*ids.length)])
            ids.splice(Math.floor(Math.random()*ids.length), 1)
            if(combinationIndex != null){
                if(currentReel < combinations[combinationIndex].length){
                    if (combinations[combinationIndex][currentReel] < singleReelSymbols.length) {
                        singleReelSymbols[combinations[combinationIndex][currentReel]] = winningSymbol;
                    }
                }
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
    console.log(combination);
    console.log(Object.values(combination)[1], Object.values(combination)[2])
    const posX:number = Math.floor(Math.random() * (Object.values(combination)[1]+1));
    const posY:number = Math.floor(Math.random() * (Object.values(combination)[2]+1));
    console.log(posX, posY);
    return [posX, posY];
}
