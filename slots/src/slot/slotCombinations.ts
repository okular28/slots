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
    drawCombination(combinationVariationDrawer());
}

export async function  drawCombination(combinationIndex):Promise<void>{
    return new Promise<void>((resolve):void => {
        setTimeout(():void => {
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
            resolve();
        }, 20);
});
}

export function combinationVariationDrawer():number|null{
    const result:number = Math.floor(Math.random() * 101);
    switch(true) {
        case (result==95):
            return 5;
        case (result>=80):
            return 4;
        case (result>=70):
            return 3;
        case (result>=55):
            return 2;
        case (result>=40):
            return 1;
        case (result>=20):
            return 0;
        default:
            return null;
    }
}