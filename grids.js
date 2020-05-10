/* eslint-env browser */

/* 
    Huge thanks to Steven Lambert for the tileset tutorial for JS:
    https://blog.sklambert.com/create-a-canvas-tileset-background/
*/

/* INDEXING */


var flowers = {
    'EMPTY' : 0,
    'BLK_C' : 1,
    'ORG_C' : 2,
    'PNK_C' : 3,
    'RED_C' : 4,
    'WHT_C' : 5,
    'YLW_C' : 6,
    'BLU_H' : 7,
    'ORG_H' : 8,
    'PNK_H' : 9,
    'PRP_H' : 10,
    'RED_H' : 11,
    'WHT_H' : 12,
    'YLW_H' : 13,
    'BLK_L' : 14,
    'ORG_L' : 15,
    'PNK_L' : 16,
    'RED_L' : 17,
    'WHT_L' : 18,
    'YLW_L' : 19,
    'GRN_M' : 20,
    'PNK_M' : 21,
    'PRP_M' : 22,
    'RED_M' : 23,
    'WHT_M' : 24,
    'YLW_M' : 25,
    'BLU_P' : 26,
    'ORG_P' : 27,
    'PRP_P' : 28,
    'RED_P' : 29,
    'WHT_P' : 30,
    'YLW_P' : 31,
    'BLK_R' : 32,
    'BLU_R' : 33,
    'ORG_R' : 34,
    'PNK_R' : 35,
    'PRP_R' : 36,
    'RED_R' : 37,
    'WHT_R' : 38,
    'YLW_R' : 39,
    'BLK_T' : 40,
    'ORG_T' : 41,
    'PNK_T' : 42,
    'PRP_W' : 43,
    'RED_W' : 44,
    'WHT_T' : 45,
    'YLW_T' : 46,
    'BLU_W' : 47,
    'ORG_W' : 48,
    'PNK_W' : 49,
    'PRP_W' : 50,
    'RED_W' : 51,
    'WHT_W' : 52
};

var tilesetImage = new Image();
tilesetImage.src = 'images/tileset.png';
tilesetImage.onload = drawImage;

var canvas = document.getElementsByTagName('canvas');
var ctx = [];
for (var i = 0; i < canvas.length; i++) {
    ctx.push(canvas[i].getContext('2d'));
}

var tileSize = 32;
var rowTileCount = 7;
var colTileCount = 14;
var imageNumTiles = 9;
var imageTileSize = 128;

/* LAYOUTS */

var thirty = 30;

var layouts = [];

var pw1 = [
    [flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W],
    [flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W],
    [flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W],
    [flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W],
    [flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W],
    [flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.EMPTY, flowers.WHT_P, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W, flowers.EMPTY, flowers.WHT_W],
    [flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_P, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W, flowers.WHT_W],
];
layouts.push(pw1);

var pw2 = [
    [flowers.EMPTY, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P],
    [flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY],
    [flowers.EMPTY, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P],
    [flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY],
    [flowers.EMPTY, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P],
    [flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY, flowers.RED_W, flowers.BLU_W, flowers.EMPTY, flowers.RED_W, flowers.ORG_W, flowers.EMPTY],
    [flowers.EMPTY, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P, flowers.EMPTY, flowers.RED_P, flowers.BLU_P, flowers.EMPTY, flowers.RED_P, flowers.YLW_P],
];
layouts.push(pw2);

/* DRAW */
 
function drawImage() {
    for (var i = 0; i < canvas.length; i++) {
        var curr = layouts[i];
        for (var r = 0; r < rowTileCount; r++) {
            for (var c = 0; c < colTileCount; c++) {
                var tile = curr[r][c];
                var tileRow = (tile / imageNumTiles) | 0;
                var tileCol = (tile % imageNumTiles) | 0;
                ctx[i].drawImage(tilesetImage, (tileCol * imageTileSize), (tileRow * imageTileSize), imageTileSize, imageTileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
            }
        }
	}
}