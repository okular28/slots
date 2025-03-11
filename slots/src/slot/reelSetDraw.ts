import { RendererConfig } from '../render/renderer.config.ts';

export function drawReels(): void {
    for ( let j: number = 0; j < RendererConfig.reelAmount; j++ ) {
        const reel: number[] = [];

        for ( let i: number = 0; i < RendererConfig.reelLength; i++ ) {
            reel.push(Math.floor(Math.random() * RendererConfig.symbolAmount));
        }

        RendererConfig.reelSet.push(reel);
        RendererConfig.initialReelSet.push(reel);
    }
}