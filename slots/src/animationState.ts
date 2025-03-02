export function animationStartStop() {
  let wrapperList = document.querySelectorAll(".wrapper") as NodeListOf<HTMLElement>;
  let element = document.getElementById("animationButton") as HTMLButtonElement;
  element.addEventListener('click', () => {
    wrapperList.forEach((wrapper) => {
      wrapper.classList.remove("animationClass");
      void wrapper.offsetWidth;
      wrapper.classList.add("animationClass");
    });
  });
}
