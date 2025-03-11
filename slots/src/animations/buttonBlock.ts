import { winAnimation } from "./winAnimation.ts";

export function buttonBlock (button: HTMLButtonElement, time: number): void {
    button.disabled = !button.disabled;

    setTimeout((): void => {
        button.disabled = !button.disabled;

        winAnimation();
    },  time);
}

export function buttonBlockWinAnimation (button: HTMLButtonElement, time: number): void {
    button.disabled = !button.disabled;

    setTimeout((): void => {
        button.disabled = !button.disabled;
    },  time);
}