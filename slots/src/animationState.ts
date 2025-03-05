import { slotDrawer } from './slotDraw.ts'

export function animationStart():void {
    const wrapperList:NodeListOf<HTMLElement> = document.querySelectorAll(".wrapper") as NodeListOf<HTMLElement>;
    const element:HTMLButtonElement = document.getElementById("animationButton") as HTMLButtonElement;
    element.addEventListener('click', ():void => {
        slotDrawer();
        wrapperList.forEach((wrapper:HTMLElement, index:number):void => {
            setTimeout(():void => {
                animationStop(wrapper, index);
                wrapper.classList.remove( "pauseClass");
                wrapper.offsetWidth;
                wrapper.classList.add("animationClass");
            }, 0);
        });
    });
}
export function animationStop(wrapper, index):void {
        setTimeout(():void => {
            wrapper.classList.remove("pauseClass");
            void wrapper.offsetWidth;
            wrapper.classList.add("pauseClass");
        },  2700);
}
