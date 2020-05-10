/* eslint-env browser */

/* 
    Huge thanks to Steven Lambert for the tileset tutorial for JS:
    https://blog.sklambert.com/create-a-canvas-tileset-background/
*/

var tilesetImage = new Image();
tilesetImage.src = 'images/tileset.png';
tilesetImage.onload = drawImage;

var canvas = document.getElementsByClassName('grids');
var ctx = [];
for (var i = 0; i < canvas.length; i++) {
    ctx.push(canvas[i].getContext('2d'));
}

var tileSize = 32;
var rowTileCount = 7;
var colTileCount = 14;
var imageNumTiles = 9;
var imageTileSize = 128;

var map = [
    [30, 30, 30, 30, 30, 30, 30, 52, 52, 52, 52, 52, 52, 52],
    [30, 0, 30, 0, 30, 0, 30, 52, 0, 52, 0, 52, 0, 52],
    [30, 30, 30, 30, 30, 30, 30, 52, 52, 52, 52, 52, 52, 52],
    [30, 0, 30, 0, 30, 0, 30, 52, 0, 52, 0, 52, 0, 52],
    [30, 30, 30, 30, 30, 30, 30, 52, 52, 52, 52, 52, 52, 52],
    [30, 0, 30, 0, 30, 0, 30, 52, 0, 52, 0, 52, 0, 52],
    [30, 30, 30, 30, 30, 30, 30, 52, 52, 52, 52, 52, 52, 52]
];
 
function drawImage() {
    "use strict";
    for (var r = 0; r < rowTileCount; r++) {
       for (var c = 0; c < colTileCount; c++) {
          var tile = map[r][c];
          var tileRow = (tile / imageNumTiles) | 0;
          var tileCol = (tile % imageNumTiles) | 0;
          ctx[0].drawImage(tilesetImage, (tileCol * imageTileSize), (tileRow * imageTileSize), imageTileSize, imageTileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
       }
    }
}