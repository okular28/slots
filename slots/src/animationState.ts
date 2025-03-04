import { slotDrawer } from './slotDraw.ts'
export function animationStartStop() {
  let wrapperList = document.querySelectorAll(".wrapper") as NodeListOf<HTMLElement>;
  let element = document.getElementById("animationButton") as HTMLButtonElement;
  element.addEventListener('click', () => {
    slotDrawer();
    wrapperList.forEach((wrapper, index) => {
      setTimeout(() => {
        wrapper.classList.remove("animationClass");
        void wrapper.offsetWidth;
        wrapper.classList.add("animationClass");
      }, index * 500);
    });
  });
}
