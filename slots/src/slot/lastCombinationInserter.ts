import  { RendererConfig } from "../render/renderer.config.ts";
import {drawCombination} from "./slotCombinations.ts";
import {combinationVariationDrawer} from "./slotCombinations.ts";


export function  insertLastCombination() {
    // await drawCombination();
        const insertIndex:number = RendererConfig.reelIndex+RendererConfig.startIndex;
    RendererConfig.reelSet.forEach((reel, index:number):void=>{
        const row:number[] = RendererConfig.winningCombination[index];
        console.log('aaaaaaaaaaaaaaaaaaaa',RendererConfig.reelIndex,RendererConfig.startIndex, insertIndex);
            RendererConfig.reelSet[index].splice(insertIndex, 3, row[2], row[1], row[0]);
        });
        // if(RendererConfig.reelSet == RendererConfig.initialReelSet){
        //     console.log(true);
        // }
        RendererConfig.reelSet = RendererConfig.initialReelSet;
        RendererConfig.winningCombination = [];
    }