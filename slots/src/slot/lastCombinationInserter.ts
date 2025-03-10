import  { RendererConfig } from "../render/renderer.config.ts";
import {drawCombination} from "./slotCombinations.ts";
import {combinationVariationDrawer} from "./slotCombinations.ts";

export async function  insertLastCombination():Promise<void> {
    await drawCombination(2);
        const startIndex:number = 6;
        const insertIndex:number = RendererConfig.reelIndex+startIndex;
    RendererConfig.reelSet.forEach((reel, index:number):void=>{
        const row:number[] = RendererConfig.winningCombination[index];
            RendererConfig.reelSet[index].splice(insertIndex, 3, row[2], row[1], row[0]);
        });
        RendererConfig.winningCombination = [];
    }