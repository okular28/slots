import {RendererConfig, RendererObject} from "./renderer.config.ts";

export const CroupierConfig: {currentCash:number, bid:number, lastWin:number} = {
    currentCash: 25000,
    bid: 1000,
    lastWin: 0
}

export function calculateWin(symbolValue, multiplier):void{
    const winValue:number = parseFloat((symbolValue*multiplier).toFixed(2));
    updateCurrentCash(winValue, false)
    CroupierConfig.lastWin = winValue;
    RendererConfig.winningSymbolPrice = 0;
    RendererConfig.winningCombinationMultiplier = 1;
}

export function updateCurrentCash(amount, subtract):void{
    if(subtract == true){
        CroupierConfig.currentCash-=amount
    }else{
        CroupierConfig.currentCash+=amount;
    }
    console.log(CroupierConfig.currentCash);
}

export  function updateListings():void{
    RendererObject.cashSpan.textContent = `Your money: ${CroupierConfig.currentCash} $`;
    RendererObject.winSpan.textContent = `Last spin winnings: ${CroupierConfig.lastWin} $`;
}