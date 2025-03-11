import { RendererConfig, RendererObject } from "./renderer.config.ts";

export const CroupierConfig: { currentCash: number, bid: number, lastWin: number } = {
    currentCash: 25000,
    bid: 1000,
    lastWin: 0
}

export function calculateWin(symbolValue: number, multiplier: number): void {
    const winValue: number = parseFloat((symbolValue * multiplier).toFixed(2));

    updateCurrentCash(winValue, false)

    CroupierConfig.lastWin = winValue;

    RendererConfig.winningSymbolPrice = 0;
    RendererConfig.winningCombinationMultiplier = 1;
}

export function updateCurrentCash(amount: number, subtract: boolean): void {
    if (subtract) {
        CroupierConfig.currentCash -= amount
    } else {
        CroupierConfig.currentCash += amount;
    }
}

export function updateListings(): void {
    RendererObject.cashSpan.textContent = `Your money: ${ CroupierConfig.currentCash } $`;
    RendererObject.winSpan.textContent = `Last spin winnings: ${ CroupierConfig.lastWin } $`;
}