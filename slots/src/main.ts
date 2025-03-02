import './style.css'
import { animationStartStop } from './animationState.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="machineContainer" id="machineContainer">
    <div class="wrapper">
        <div class="cell red"></div>
        <div class="cell green"></div>
        <div class="cell white"></div>
        <div class="cell darkgreen"></div>
        <div class="machineBorder
        "></div>
        <div class="filler"></div>
        <div class="machineBorder
        "></div>
    </div>
    <div class="wrapper">
        <div class="cell blue"></div>
        <div class="cell red"></div>
        <div class="cell green"></div>
        <div class="cell white"></div>
        <div class="machineBorder
        "></div>
        <div class="filler"></div>
        <div class="machineBorder
        "></div>
    </div>
    <div class="wrapper">
        <div class="cell teal"></div>
        <div class="cell pink"></div>
        <div class="cell gray"></div>
        <div class="cell black"></div>
        <div class="machineBorder
        "></div>
        <div class="filler"></div>
        <div class="machineBorder
        "></div>
    </div>
    <div class="wrapper">
        <div class="cell white"></div>
        <div class="cell green"></div>
        <div class="cell pink"></div>
        <div class="cell darkgreen"></div>
        <div class="machineBorder"></div>
        <div class="filler"></div> 
        <div class="machineBorder
        "></div>
    </div>
    <div class="wrapper">
        <div class="cell blue"></div>
        <div class="cell red"></div>
        <div class="cell green"></div>
        <div class="cell white"></div>
        <div class="machineBorder
        "></div>
        <div class="filler"></div>
        <div class="machineBorder
        "></div>
    </div>
  </div>
  <button id="animationButton">Spin</button>
`
animationStartStop();
