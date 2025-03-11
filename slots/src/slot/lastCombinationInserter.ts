import { RendererConfig } from "../render/renderer.config.ts";
import { calculateWin, CroupierConfig } from "../render/croupier.ts";


export function insertLastCombination(): void {
    RendererConfig.reelSet = RendererConfig.initialReelSet.map((inner: number[]) => [...inner]);

    let insertIndex: number = RendererConfig.reelIndex + RendererConfig.startIndex;

    if (RendererConfig.reelIndex + RendererConfig.startIndex > RendererConfig.reelLength) {
        insertIndex = 6;
    }

    RendererConfig.reelSet.forEach((_, index: number): void => {
        const row: number[] = RendererConfig.winningCombination[index];
        RendererConfig.reelSet[index].splice(insertIndex, 3, row[2], row[1], row[0]);
    });

    RendererConfig.winningCombination = [];

    if (RendererConfig.winningSymbolPrice != 0) {
        calculateWin(RendererConfig.winningSymbolPrice, RendererConfig.winningCombinationMultiplier);
    } else CroupierConfig.lastWin = 0;
}