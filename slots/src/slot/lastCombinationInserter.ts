import  { RendererConfig } from "../render/renderer.config.ts";
export const insertLastCombination = ():void =>{
        const startIndex:number = 6;
        const insertIndex:number = RendererConfig.reelIndex+startIndex;
    RendererConfig.reelSet.forEach((reel, index:number):void=>{
        RendererConfig.reelSet[index].splice(insertIndex, 3, "d","d","d");
        console.log(RendererConfig.reelSet);
    });
}