const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector("#modal-overlay");


const img = ".pastelColor img",
  canvas = "#cs",
  result = ".result",
  preview = ".preview";
  let x = "";
  let y = "";

const Canvas = (e) => {

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function overCanvas() {

    if(e.offsetX) {
      x = e.offsetX;
      y = e.offsetY;
    }
    else if(e.layerX) {
      x = e.layerX;
      y = e.layerY;
    }
    const UseCanvas = (canvas, img, function() {

      const p = canvas.getContext('2d').getImageData(x, y, 1, 1).data;

      result.innerHtml = '<span>&nbsp HEX: '+rgbToHex(p[0], p[1], p[2])+'</span>'+
      '<span>&nbsp RGB: ('+
      p[0]+','+
      p[1]+','+
      p[2]+')</span>';
    

    document.body.style.background =rgbToHex(p[0],p[1],p[2]);
    })
  } return false;
}

export default Canvas;
