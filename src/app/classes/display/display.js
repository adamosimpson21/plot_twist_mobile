let graphics, canvas, ctx = CanvasRenderingContext2D.prototype;

export class Display {
  constructor() {
    // this.p = false;
    canvas = document.getElementById("canvas");
    canvas.setAttribute("height", GAME_SIZE);
    canvas.setAttribute("width", GAME_SIZE);
    graphics = canvas.getContext("2d");
    graphics.webkitImageSmoothingEnabled = false;
    graphics.imageSmoothingEnabled = false;
  }

  // createDisplay() {
    // document.title = this.t;
   
  // };

  // setEventListeners() {
  //   window.onblur = this.pause;
  //   window.onfocus = this.unPause;
  // }

  // pause() {
  //   this.p = true;
  // }

  // unPause() {
  //   this.p = false;
  // }

  // getTitle() {
  //   return this.t;
  // }

  // getWidth() {
  //   return this.width;
  // }

  // getHeight() {
  //   return this.height;
  // }

  getGraphics() {
    return graphics;
  }
}

// CanvasRenderingContext2D.prototype.myDrawImage = (asset, x, y, width, height) => {
  // graphics.drawImage(asset.sheet, asset.x, asset.y, asset.width, asset.height, x, y, width, height);
// };
ctx.myDrawImage = (asset, x, y, size = TILE_SIZE) => {
  graphics.drawImage(asset.sheet, asset.x, asset.y, asset.width, asset.height, x, y, size, size);
};

ctx.drawText = (text, x, y, color = 'white', s = '28') => {
  graphics.font = s + 'px Arial';
  graphics.fillStyle = color;
  graphics.fillText(text,  x, y);
};

ctx.shakeScreen = () => {
  let x = rndInt(-15, 15);
  let y = rndInt(-15, 15);

  // try {
    let imgData = graphics.getImageData(0,0, GAME_SIZE, GAME_SIZE);

    // graphics.fillStyle = 'black';
    // graphics.fillRect(0, 0, GAME_SIZE, GAME_SIZE);

    graphics.putImageData(imgData, x, y);
  // } catch(e) {
  //   // console.error(e);
  // }
}
