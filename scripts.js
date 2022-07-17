const modal = document.querySelector('.modal');
const btn = document.querySelector('.pencil');
const modalOverlay = document.querySelector("#modal-overlay");
const sendBtn = document.querySelector('.sendBtn');
const closeBtn = document.querySelector('.closeBtn');

var img = _('.pastelColor img'),
    canvas = _('#cs'),
    result = _('.result'),
    preview = _('.preview'),x = '',y = '';


btn.onclick = function() {
  console.log('clicked');
  modal.style.display = 'block';
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

img.addEventListener('click', function(e){
 
  if(e.offsetX) {
    x = e.offsetX;
    y = e.offsetY; 
  }
 
  else if(e.layerX) {
    x = e.layerX;
    y = e.layerY;
  }
  useCanvas(canvas,img,function(){

    var p = canvas.getContext('2d')
    .getImageData(x, y, 1, 1).data;
  
    result.innerHTML = '<span>&nbsp HEX: '+rgbToHex(p[0],p[1],p[2])+'</span>'+
     '<span>&nbsp RGB: ('+
      p[0]+','+
      p[1]+','+
      p[2]+')</span>';
    

    document.body.style.background =rgbToHex(p[0],p[1],p[2]);
  });
},false);

img.addEventListener('mousemove', function(e){

  if(e.offsetX) {
    x = e.offsetX;
    y = e.offsetY; 
  }

  else if(e.layerX) {
    x = e.layerX;
    y = e.layerY;
  }
  
  useCanvas(canvas,img,function(){
    
    var p = canvas.getContext('2d')
    .getImageData(x, y, 1, 1).data;
   
    preview.style.background = rgbToHex(p[0],p[1],p[2]);
  });
},false);

function useCanvas(el,image,callback){
  el.width = image.width; 
  el.height = image.height; 
  
  el.getContext('2d')
  .drawImage(image, 0, 0, image.width, image.height);
  return callback();
}

function _(el){
  return document.querySelector(el);
};


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}
