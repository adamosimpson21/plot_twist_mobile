import { Display } from './display/display';
import { Handler } from './handler';
import { KeyManager } from './input/key-manager';
import { Info } from './menus/info';
// import { StartMenu } from './menus/start-menu';
import { State } from './states/state';
import { SoundManager } from './sounds/sound-manager';

// let i = 0;
let display,
//   gameState,
  graphics,
//   handler,
  keyManager,
//   startMenu,
//   soundManager,
  state;

export class Game {
  run() {
    this.init();
    let fps = 60;
    let timePerTick = 1000 / fps;
    let delta = 0;
    let dt = 0;
    let now = Date.now();
    let lastTime = Date.now();
    let timer = 0;

    let loop = () => {
      now = Date.now();
      delta = now - lastTime;
      timer += delta;
      lastTime = now;

      if(timer >= timePerTick) {
        dt = timer / 1000;
        this.tick(dt);
        this.render();
        timer = 0;
      }
      window.requestAnimationFrame(loop);
    };

    loop();
  }

  getKeyManager() {
    return keyManager;
  }

  getDisplay(){
    return display;
  }

  // getWidth() {
  //   return this.width;
  // }

  // getHeight() {
  //   return this.height;
  // }

  // getGameCamera() {
  //   return gameCamera;
  // }

  getGameState() {
    return state;
  }

  init() {
    let handler = new Handler(this);
    display = new Display();
    keyManager = new KeyManager();
    // this.d = new Dialogue();
    graphics = display.getGraphics();
    state = new State();
    // gameCamera = new GameCamera(handler, 0, 0);
    let soundManager = new SoundManager();
    handler.setSoundManager(soundManager);

    let info = new Info(handler, keyManager);
    state.setState(info);
    // let startMenu = new StartMenu(handler);
    // state.setState(startMenu);
    // let gameOver = new GameOver(handler, 'death');
    // state.setState(gameOver);
    // gameState = new GameState(handler);
    // state.setState(gameState);
  }

  tick(dt) {
    // this.d.tick(handler);
    keyManager.tick();
    ANIMATION_TIMER.tick();
    // if (state.getState() && !display.paused)
    state.getState().tick(dt);
  }

  render(){
  //   if (state.getState() && !display.paused)
    graphics.clearRect(0,0,GAME_SIZE,GAME_SIZE);
    state.getState().render(graphics);
  }

}
