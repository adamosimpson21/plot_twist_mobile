import { Display } from './display/display';
import { GameState } from './states/game-state';
import { GameCamera } from './gfx/game-camera';
import { Handler } from './handler';
import { KeyManager } from './input/key-manager';
import { MainMenu } from './menus/main-menu';
import { State } from './states/state';

let running = false;
let title, width, height, g, display, keyManager, handler, gameCamera, soundManager;
let state, gameState, mainMenu, settingsState;
let consoleCounter = 0;

export class Game {
  constructor(_title, _width, _height){
    this.height = _height;
    this.title = _title;
    this.width = _width;
  }

  run() {
    this.init();
    let fps = 60;
    let timePerTick = 1000 / fps;
    let delta = 0;
    let dt = 0;
    let now = Date.now();
    let lastTime = Date.now();
    let timer = 0;

    const loop = () => {
      if(running) {
        now = Date.now();
        delta = now - lastTime;
        timer += delta;
        lastTime = now;
      }

      if(timer >= timePerTick){
        dt = timer / 1000;
        this.tick(dt);
        this.render();
        timer = 0;
      }
      window.requestAnimationFrame(loop);
    };

    loop();

  }

  start() {
    if (running) return;
    running = true;
    this.run();
  }

  getKeyManager() {
    return keyManager;
  }

  getDisplay(){
    return display;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getGameCamera() {
    // console.log('returning', gameCamera);
    return gameCamera;
  }

  getGameState() {
    return state;
  }

  init() {
    handler = new Handler(this);
    display = new Display(this.title, this.width, this.height);
    keyManager = new KeyManager();
    g = display.getGraphics();
    state = new State();
    gameCamera = new GameCamera(handler, 0, 0);
    // gameState = new GameState(handler);
    // state.setState(gameState);
    mainMenu = new MainMenu(handler);
    state.setState(mainMenu);
  }

  tick(_dt) {
    keyManager.tick();
    if (state.getState()) state.getState().tick(_dt);

    consoleCounter++;
    if (consoleCounter >= 240) {
      console.log('FLUSH IT');
      handler.flushConsole();
      consoleCounter = 0;
    }
  }

  render(){
    if (state.getState()) state.getState().render(g);
  }
}
