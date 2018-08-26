!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e,n,r,o){i(this,t),this.x=e,this.y=n,this.width=r,this.height=o}return r(t,[{key:"intersects",value:function(t){return this.x<t.x+t.width&&this.x+this.width>t.x&&this.y<t.y+t.height&&this.y+this.height>t.y}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return h});var a=n(2),u=n(16),s=n(0),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),h=function(t){function e(t,n,o){i(this,e);var u=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,o,TILE_SIZE,TILE_SIZE));return u.xMove=0,u.yMove=0,u.type="g",u.a=a.a.getAssets("all"),u.x=n*TILE_SIZE,u.y=o*TILE_SIZE,u.speed=900,u.lastAnim=u.type+"right",u.state=1,u.b.x=16,u.b.y=32,u.b.s=32,u.dirs={1:{mod:-4,y:11.5*TILE_SIZE},2:{mod:1,x:.5*TILE_SIZE},3:{mod:4,y:.5*TILE_SIZE},4:{mod:-1,x:11.5*TILE_SIZE}},u}return o(e,t),c(e,[{key:"tick",value:function(){this.a.anim[this.lastAnim].tick()}},{key:"move",value:function(){var t=this.isOffScreen();if(t)return void this.handler.getWorld().changeRooms(t);(Math.abs(this.xMove)>0||Math.abs(this.yMove)>0)&&(this.handler.getWorld().getSpatialGrid().remove(new s.a(this.x+this.b.x,this.y+this.b.y,this.b.s,this.b.s),this),this.checkEntityCollisions(this.xMove,0)||this.moveX(),this.checkEntityCollisions(0,this.yMove)||this.moveY(),this.handler.getWorld().getSpatialGrid().insert(new s.a(this.x+this.b.x,this.y+this.b.y,this.b.s,this.b.s),this))}},{key:"moveX",value:function(){var t=this.xMove>0?parseInt((this.x+this.xMove+this.b.x+this.b.s)/TILE_SIZE):parseInt((this.x+this.xMove+this.b.x)/TILE_SIZE),e=parseInt((this.y+this.b.y)/TILE_SIZE),n=parseInt((this.y+this.b.y+this.b.s)/TILE_SIZE),i=this.xMove>0?t*TILE_SIZE-this.b.x-this.b.s-1:t*TILE_SIZE+TILE_SIZE-this.b.x;this.collisionWithTile(t,e)||this.collisionWithTile(t,n)?this.x=i:this.x+=this.xMove}},{key:"moveY",value:function(){var t=this.yMove>0?parseInt((this.y+this.yMove+this.b.y+this.b.s)/TILE_SIZE):parseInt((this.y+this.yMove+this.b.y)/TILE_SIZE),e=parseInt((this.x+this.b.x)/TILE_SIZE),n=parseInt((this.x+this.b.x+this.b.s)/TILE_SIZE),i=this.yMove>0?t*TILE_SIZE-this.b.y-this.b.s-1:t*TILE_SIZE+TILE_SIZE-this.b.y;this.collisionWithTile(e,t)||this.collisionWithTile(n,t)?this.y=i:this.y+=this.yMove}},{key:"collisionWithTile",value:function(t,e){try{return this.handler.getWorld().getTile(t,e).isSolid}catch(t){}}},{key:"isOffScreen",value:function(){var t=TILE_SIZE;return this.y+t<0?this.dirs[1]:this.x>GAME_SIZE?this.dirs[2]:this.y>GAME_SIZE?this.dirs[3]:this.x+t<0?this.dirs[4]:0}},{key:"frame",value:function(t){return this.xMove<0?(this.lastAnim=t+"left",this.a.anim[this.lastAnim].getCurrentFrame()):this.xMove>0?(this.lastAnim=t+"right",this.a.anim[this.lastAnim].getCurrentFrame()):this.a.anim[this.lastAnim].getCurrentFrame()}}]),e}(u.a)},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return h});var r=n(13),o=n(14),a=n(15),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s={},c=window.location.href.replace("index.html","")+"src/res/",h=function(){function t(e,n){i(this,t),s[e]=this,this.name=e,this.path=n,this.width=SPRITE_SIZE,this.height=SPRITE_SIZE,this.sheet=new a.a(o.a.loadImage(this.path)),this.anim={}}return u(t,[{key:"addAnimation",value:function(t,e){this.anim[t]=e}}],[{key:"getAssets",value:function(t){return s[t]}}]),t}(),f=function(t,e,n,i){for(var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=[],u=[],s=function(e,n){return t.sheet.crop(SPRITE_SIZE*n,SPRITE_SIZE*e,SPRITE_SIZE,SPRITE_SIZE)},c=0;c<2;c++)a.push({frame:s(n,c),speed:300}),o&&u.push({frame:s(i,c),speed:300});t.addAnimation(e+"right",new r.a(a)),t.addAnimation(e+"left",new r.a(u))},l=new h("all",c+"all.png");f(l,"p",0,1),f(l,"g",2,3),f(l,"w",4,0,!1)},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e,n){i(this,t),this.anim=!1,this.isSolid=!1,this.texture=n,this.id=e}return r(t,[{key:"tick",value:function(){this.anim&&this.texture.tick()}},{key:"render",value:function(t,e,n){var i=this.anim?this.texture.getCurrentFrame():this.texture;t.myDrawImage(i,e,n,TILE_SIZE,TILE_SIZE)}},{key:"getId",value:function(){return this.id}}]),t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5);n.n(i),n(6)},function(t,e){window.GAME_SIZE=768,window.SPRITE_SIZE=8,window.TILE_COUNT=12,window.TILE_SIZE=64,window.rndInt=function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},function(t,e,n){"use strict";(new(n(7).a)).run()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return v});var r=n(8),o=n(9),a=n(25),u=n(26),s=n(27),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),h=void 0,f=void 0,l=void 0,y=void 0,m=void 0,p=void 0,v=function(){function t(){i(this,t)}return c(t,[{key:"run",value:function(){var t=this;this.init();var e=0,n=0,i=Date.now(),r=Date.now(),o=0;!function a(){i=Date.now(),e=i-r,o+=e,r=i,o>=1e3/60&&(n=o/1e3,t.tick(n),t.render(),o=0),window.requestAnimationFrame(a)}()}},{key:"getKeyManager",value:function(){return m}},{key:"getDisplay",value:function(){return h}},{key:"init",value:function(){y=new a.a(this),h=new r.a,m=new u.a,l=h.getGraphics(),p=new s.a,f=new o.a(y),p.setState(f)}},{key:"tick",value:function(t){m.tick(),p.getState().tick(t)}},{key:"render",value:function(){l.clearRect(0,0,GAME_SIZE,GAME_SIZE),p.getState().render(l)}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return a});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=void 0,a=function(){function t(){i(this,t),this.createDisplay()}return r(t,[{key:"createDisplay",value:function(){var t=document.getElementById("canvas");t.setAttribute("height",GAME_SIZE),t.setAttribute("width",GAME_SIZE),o=t.getContext("2d"),o.webkitImageSmoothingEnabled=!1,o.mozImageSmoothingEnabled=!1,o.imageSmoothingEnabled=!1}},{key:"getGraphics",value:function(){return o}}]),t}();CanvasRenderingContext2D.prototype.myDrawImage=function(t,e,n){o.drawImage(t.sheet,t.x,t.y,t.width,t.height,e,n,TILE_SIZE,TILE_SIZE)}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return a});var r=n(10),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function t(e){i(this,t),this.handler=e,this.world=new r.a(e)}return o(t,[{key:"tick",value:function(t){this.world.tick(t)}},{key:"render",value:function(t){this.world.render(t)}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return h});var r=n(11),o=n(12),a=n(19),u=n(20),s=(n(23),n(24)),c=(n.n(s),function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()),h=function(){function t(e){i(this,t),this.handler=e,this.entityManager=new r.a(e,new o.a(e,4,4)),this.spatialGrid=new a.a(GAME_SIZE,GAME_SIZE,TILE_SIZE),this.rooms=s.default,this.room=rndInt(4,11),e.setWorld(this)}return c(t,[{key:"tick",value:function(t){this.tickTiles(),this.entityManager.tick(t)}},{key:"render",value:function(t){this.changeRoom||(this.renderTiles(t),this.entityManager.render(t))}},{key:"setPlayerSpawn",value:function(t){var e=this.entityManager.getPlayer();e.x=t.x||e.x,e.y=t.y||e.y}},{key:"changeRooms",value:function(t){this.changeRoom=!0,this.room=this.room+t.mod,this.setPlayerSpawn(t),this.changeRoom=!1,console.log("now in room",this.room)}},{key:"renderTiles",value:function(t){for(var e=0;e<TILE_COUNT;e++)for(var n=0;n<TILE_COUNT;n++)u.a.getTiles()[this.rooms[this.room][e][n]].render(t,n*TILE_SIZE,e*TILE_SIZE)}},{key:"tickTiles",value:function(t){for(var e=0;e<TILE_COUNT;e++)for(var n=0;n<TILE_COUNT;n++)u.a.getTiles()[this.rooms[this.room][e][n]].tick()}},{key:"getTile",value:function(t,e){try{return u.a.getTiles()[this.tiles[t][e]]}catch(t){}}},{key:"getEntityManager",value:function(){return this.entityManager}},{key:"getSpatialGrid",value:function(){return this.spatialGrid}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return c});var r=n(0),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=void 0,u=void 0,s=void 0,c=function(){function t(e,n){i(this,t),a=e,u=n,s=new Array(u)}return o(t,[{key:"tick",value:function(t){for(var e=0;e<s.length;e++)s[e].tick(t)}},{key:"render",value:function(t){for(var e=0;e<s.length;e++)s[e].render(t)}},{key:"getPlayer",value:function(){return u}},{key:"getHandler",value:function(){return a}},{key:"getEntities",value:function(){return s}},{key:"addEntity",value:function(t){s.push(t),a.getWorld().getSpatialGrid().insert(new r.a(t.x+t.b.x,t.y+t.b.y,t.b.s,t.b.s),t)}},{key:"removeEntity",value:function(t){var e=s.indexOf(t);a.getWorld().getSpatialGrid().remove(new r.a(t.x+t.b.x,t.y+t.b.y,t.b.s,t.b.s),t),s.splice(e,1)}},{key:"removeEntitiesByType",value:function(t){}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return h});var a=n(1),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(i)},c=1,h=function(t){function e(t,n,o){i(this,e);var a=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,o));return a.lastAnim="pright",a.type="p",a}return o(e,t),u(e,[{key:"tick",value:function(t){switch(s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"tick",this).call(this,t),this.state){case 1:this.xMove=this.yMove=0,this.getInput(t),this.move();break;case 2:c>.02&&(c-=.02)}}},{key:"render",value:function(t){switch(this.state){case 1:t.myDrawImage(this.frame("p"),this.x,this.y,TILE_SIZE,TILE_SIZE);break;case 2:t.globalAlpha=c,t.myDrawImage(this.frame("p"),this.x,this.y,TILE_SIZE,TILE_SIZE),t.globalAlpha=1}}},{key:"getInput",value:function(t){var e=this.handler.getKeyManager();(e.up||e.w||e.z)&&(this.yMove=-this.speed*t),(e.down||e.s)&&(this.yMove=this.speed*t),(e.left||e.a||e.q)&&(this.xMove=-this.speed*t),(e.right||e.d)&&(this.xMove=this.speed*t)}}]),e}(a.a)},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){i(this,t),this.f=e,this.i=0,this.l=Date.now(),this.t=0,this.s=1e3}return r(t,[{key:"tick",value:function(){this.t+=Date.now()-this.l,this.l=Date.now(),this.t>=this.s&&(this.i++,this.t=0,this.i>=this.f.length&&(this.i=0))}},{key:"getCurrentFrame",value:function(){return this.s=this.f[this.i].speed,this.f[this.i].frame}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(){i(this,t)}return r(t,null,[{key:"loadImage",value:function(t){var e=new Image;return e.src=t,e}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){i(this,t),this.sheet=e}return r(t,[{key:"crop",value:function(t,e,n,i){return{sheet:this.sheet,x:t,y:e,width:n,height:i}}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return s});var r=n(17),o=(n.n(r),n(18)),a=(n.n(o),n(0)),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(e,n,r,o,u){i(this,t),this.x=n,this.y=r,this.width=o,this.height=u,this.handler=e,this.b=new a.a(0,0,o,u)}return u(t,[{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"getCollisionBounds",value:function(){return new a.a(parseInt(this.x+this.b.x),parseInt(this.y+this.b.y),this.b.s,this.b.s)}},{key:"checkEntityCollisions",value:function(t,e){for(var n=this.handler.getWorld().getSpatialGrid().retrieve(new a.a(this.x+this.b.x+t,this.y+this.b.y+e,this.b.s,this.b.s),this),i=0;i<n.length;i++){var r=n[i];if(r.getCollisionBounds(0,0).intersects(this.getCollisionBounds(t,e)))return this.checkForCollisionEvents(this,r),!0}return!1}},{key:"checkForCollisionEvents",value:function(t,e){if(!this.checkCollidingTypes(t,e,"g","g")){var n=this.handler;n.getGame(),n.getWorld();console.log(t.type,e.type),this.checkCollidingTypes(t,e,"p","g")&&(this.handler.getWorld().getEntityManager().getPlayer().state=2)}}},{key:"checkCollidingTypes",value:function(t,e,n,i){return t.type===n&&e.type===i||t.type===i&&e.type===n}},{key:"setX",value:function(t){this.x=t}},{key:"setY",value:function(t){this.y=t}},{key:"setWidth",value:function(t){this.width=t}},{key:"setHeight",value:function(t){this.height=t}}]),t}()},function(t,e){},function(t,e){},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e,n,r){i(this,t),this.width=parseInt(e/r),this.height=parseInt(n/r),this.size=r,this.grid=[];for(var o=0;o<=this.width;o++){this.grid[o]=[];for(var a=0;a<=this.height;a++)this.grid[o][a]=[]}}return r(t,[{key:"insert",value:function(t,e){for(var n=Math.max(0,parseInt(t.x/this.size)),i=Math.max(0,parseInt(t.y/this.size)),r=Math.min(this.width,parseInt((t.x+t.width)/this.size)),o=Math.min(this.height,parseInt((t.y+t.height)/this.size)),a=i;a<=o;a++)for(var u=n;u<=r;u++)-1===this.grid[u][a].indexOf(e)&&this.grid[u][a].push(e)}},{key:"retrieve",value:function(t,e){for(var n=Math.max(0,parseInt(t.x/this.size)),i=Math.max(0,parseInt(t.y/this.size)),r=Math.min(this.width,parseInt((t.x+t.width)/this.size)),o=Math.min(this.height,parseInt((t.y+t.height)/this.size)),a=[],u=i;u<=o;u++)for(var s=n;s<=r;s++)this.grid[s][u].forEach(function(t){t!==e&&-1===a.indexOf(t)&&a.push(t)});return a}},{key:"remove",value:function(t,e){for(var n=Math.max(0,parseInt(t.x/this.size)),i=Math.max(0,parseInt(t.y/this.size)),r=Math.min(this.width,parseInt((t.x+t.width)/this.size)),o=Math.min(this.height,parseInt((t.y+t.height)/this.size)),a=i;a<=o;a++)for(var u=n;u<=r;u++)for(var s=0;s<this.grid[u][a].length;s++)this.grid[u][a][s]===e&&this.grid[u][a].splice(s,1)}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"getSize",value:function(){return this.size}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return s});var r=n(21),o=n(22),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=[];u[0]=new r.a(0),u[1]=new o.a(1);var s=function(){function t(){i(this,t)}return a(t,null,[{key:"getAssets",value:function(){return assets}},{key:"getTiles",value:function(){return u}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return s});var a=n(3),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.isSolid=!1,n}return o(e,t),u(e,[{key:"render",value:function(){}}]),e}(a.a)},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return s});var a=n(2),u=n(3),s=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,a.a.getAssets("all").anim.wright));return n.anim=!0,n.isSolid=!0,n}return o(e,t),e}(u.a)},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(1),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(i)};!function(t){function e(t,n,o){i(this,e);var a=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,o));return a.lastAnim="gleft",a}o(e,t),u(e,[{key:"tick",value:function(t){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"tick",this).call(this,t)}},{key:"render",value:function(t){t.myDrawImage(this.frame("g"),this.x,this.y,TILE_SIZE,TILE_SIZE)}}])}(a.a)},function(t,e){throw new Error("Module build failed: SyntaxError: Unexpected token (3:0)\n\n[0m [90m 1 | [39m[36mconst[39m makeRoom [33m=[39m () [33m=>[39m\n [90m 2 | [39m\n[31m[1m>[22m[39m[90m 3 | [39m[36mconst[39m types [33m=[39m {\n [90m   | [39m[31m[1m^[22m[39m\n [90m 4 | [39m  [35m0[39m[33m:[39m [ [90m// standard room[39m\n [90m 5 | [39m    [[35m1[39m[33m,[39m [35m1[39m[33m,[39m [35m1[39m[33m,[39m [35m1[39m[33m,[39m [35m1[39m[33m,[39m [35m0[39m[33m,[39m [35m0[39m[33m,[39m [35m1[39m[33m,[39m [35m1[39m[33m,[39m [35m1[39m[33m,[39m [35m1[39m[33m,[39m [35m1[39m][33m,[39m\n [90m 6 | [39m    [[35m1[39m[33m,[39m [35m0[39m[33m,[39m [35m0[39m[33m,[39m [35m0[39m[33m,[39m [35m0[39m[33m,[39m [35m0[39m[33m,[39m [35m0[39m[33m,[39m [35m0[39m[33m,[39m [35m0[39m[33m,[39m [35m0[39m[33m,[39m [35m0[39m[33m,[39m [35m1[39m][33m,[39m[0m\n")},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){i(this,t),this.game=e}return r(t,[{key:"getWidth",value:function(){return this.game.getWidth()}},{key:"getHeight",value:function(){return this.game.getHeight()}},{key:"getKeyManager",value:function(){return this.game.getKeyManager()}},{key:"getWorld",value:function(){return this.world}},{key:"setWorld",value:function(t){this.world=t}},{key:"getGame",value:function(){return this.game}}]),t}()},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return a});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=[],a=function(){function t(){i(this,t)}return r(t,[{key:"tick",value:function(){this.up=o[38],this.down=o[40],this.left=o[37],this.right=o[39],this.a=o[65],this.w=o[87],this.s=o[83],this.d=o[68],this.z=o[90],this.q=o[81]}}]),t}();window.onkeydown=function(t){o[t.keyCode]=!0},window.onkeyup=function(t){o[t.keyCode]=!1}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return o});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e){i(this,t),this.currentState=null,this.handler=e}return r(t,[{key:"getState",value:function(){return this.currentState}},{key:"setState",value:function(t){this.currentState=t}}]),t}()}]);