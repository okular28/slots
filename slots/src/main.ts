import './style.css'
import { animationStartStop } from './animationState.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="machineContainer" id="machineContainer">
    <div class="wrapper">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="machineBorder"></div>
        <div class="filler"></div>
        <div class="machineBorder"></div>
    </div>
    <div class="wrapper">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="machineBorder"></div>
        <div class="filler"></div>
        <div class="machineBorder"></div>
    </div>
    <div class="wrapper">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="machineBorder"></div>
        <div class="filler"></div>
        <div class="machineBorder"></div>
    </div>
    <div class="wrapper">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="machineBorder"></div>
        <div class="filler"></div> 
        <div class="machineBorder"></div>
    </div>
    <div class="wrapper">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="machineBorder"></div>
        <div class="filler"></div>
        <div class="machineBorder"></div>
    </div>
  </div>
  <button id="animationButton">Spin</button>
`

animationStartStop();
