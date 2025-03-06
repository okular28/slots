import { RendererConfig } from "./renderer.config";

const config = RendererConfig;

export const renderReels = () => {
    const machineContainer: Element = document.getElementsByClassName('machineContainer')[0];

    for (let i: number = 0; i < config.reelAmount; i++) {
        const reel: HTMLDivElement = document.createElement('div');
        reel.classList.add('reel');

        for (let i: number = 0; i < config.symbolAmount; i++) {
            const row: HTMLDivElement = document.createElement('div');
            row.classList.add('row');
            reel.appendChild(row);
        }

        const machineBorder: HTMLDivElement = document.createElement('div');
        machineBorder.classList.add('machineBorder');
        reel.appendChild(machineBorder);

        const filler: HTMLDivElement = document.createElement('div');
        filler.classList.add('filler');
        reel.appendChild(filler);

        const machineBorder2: HTMLDivElement = document.createElement('div');
        machineBorder2.classList.add('machineBorder');
        reel.appendChild(machineBorder2);

        machineContainer.appendChild(reel);
        console.log(reel);
    }
}