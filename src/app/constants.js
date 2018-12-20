import { AnimationTimer } from "./classes/gfx/animation-timer";

window.GAME_SIZE = 768; //px

window.SPRITE_SIZE = 32; //px
window.ANIMATION_TIMER = new AnimationTimer();

window.TILE_SIZE = 64; //px
window.TILE_COUNT = 12; //tiles

window.rndIndex = (nums) => nums[Math.floor(Math.random() * (nums.length))];
window.rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;;