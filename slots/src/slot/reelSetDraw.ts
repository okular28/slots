import { RendererConfig } from '../render/renderer.config.ts';
export function drawReels():void{
    for (let j:number = 0; j < RendererConfig.reelAmount; j++) {
        const reel:any[] = [];
        for (let i:number = 0; i < RendererConfig.reelLength; i++) {
            reel.push(Math.floor(Math.random() * RendererConfig.symbolAmount));
        }
    RendererConfig.reelSet.push(reel);
    }
}