export interface SymbolConfigItem {
    id: number;
    name: string;
    price: number;
}

export interface IRendererConfig {
    reelAmount: number;
    symbolAmount: number;
    reelIndex: number;
    reelLength: number;
    symbolConfig: SymbolConfigItem[];
    reelSet: number[][];
    initialReelSet: number[][];
    startIndex: number;
    winningCombination: number[][];
    iterationTime: number;
    animationTime: number;
    iterationCount: number;
    winningSymbolPrice: number;
    winningCombinationMultiplier: number;
}

export const RendererConfig: {
    symbolAmount: number;
    animationTime: number;
    iterationCount: number;
    symbolHeight: number;
    reelIndex: number;
    iterationTime: number;
    winningCombination: number[][];
    reelAmount: number;
    reelSet: number[][];
    initialReelSet: number[][];
    winningSymbol: string;
    winningSymbolPrice: number;
    winningCombinationMultiplier: number;
    startIndex: number;
    reelLength: number;
    symbolConfig: SymbolConfigItem[]
} = {
    reelAmount: 5,
    symbolAmount: 9,
    iterationCount: 5,
    reelLength: 50,
    symbolHeight: 180,
    iterationTime: 280,
    animationTime: 5 * 280 + 280 * 0.5,
    winningSymbol: '',
    winningSymbolPrice: 0,
    winningCombination: [],
    winningCombinationMultiplier: 1,
    startIndex: 6,
    reelIndex: 0,
    symbolConfig: [
        {
            id: 0,
            name: "Diamond",
            price: 25000
        },
        {
            id: 1,
            name: "Emerald",
            price: 20000
        },
        {
            id: 2,
            name: "Alexandrite",
            price: 15000
        },
        {
            id: 3,
            name: "Rubin",
            price: 10000
        },
        {
            id: 4,
            name: "Opal",
            price: 5000
        },
        {
            id: 5,
            name: "Sapphire",
            price: 3000
        },
        {
            id: 6,
            name: "Tanzanite",
            price: 1000
        },
        {
            id: 7,
            name: "Topaz",
            price: 500
        },
        {
            id: 8,
            name: "Amethyst",
            price: 100
        }
    ],
    reelSet: [],
    initialReelSet: [],
}

export const RendererObject: { button: HTMLButtonElement, cashSpan: HTMLSpanElement, winSpan: HTMLSpanElement } = {
    button: document.getElementById("animationButton") as HTMLButtonElement,
    cashSpan: document.getElementById("currentCash") as HTMLSpanElement,
    winSpan: document.getElementById("lastWin") as HTMLSpanElement,
}