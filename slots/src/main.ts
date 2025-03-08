// import './style.css'
import { animationStart } from './animations/animationState.ts'
import {renderReels, renderReelSteps} from './render/renderer.ts';
import {drawReels} from "./slot/reelSetDraw.ts";
import {slotDrawer} from "./slot/slotDraw.ts";

renderReels();
drawReels();
slotDrawer();
