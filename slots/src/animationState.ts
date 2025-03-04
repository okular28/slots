import { slotDrawer } from './slotDraw.ts'
export function animationStartStop():void {
  let wrapperList:NodeListOf<HTMLElement> = document.querySelectorAll(".wrapper") as NodeListOf<HTMLElement>;
  let element:HTMLButtonElement = document.getElementById("animationButton") as HTMLButtonElement;
  element.addEventListener('click', () => {
    slotDrawer();
    wrapperList.forEach((wrapper:HTMLElement, index:number):void => {
      setTimeout(():void => {
        wrapper.classList.remove("animationClass");
        void wrapper.offsetWidth;
        wrapper.classList.add("animationClass");
      }, index * 500);
    });
  });
}
