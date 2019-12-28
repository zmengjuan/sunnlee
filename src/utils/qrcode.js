const QRCode = require('easyqrcodejs');

export default function(el,value,width=200,height=200){
  if(el.children.length){
    Array.from(el.children).forEach(item =>{
      item.remove()
    })
  }
  let qrcode = new QRCode(el,{
    text: value || 'http://106.54.128.146/test-demo/#/demolist',
    width,
    height,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H
    dotScale: 1,// Must be greater than 0, less than or equal to 1. default is 1
    quietZone: 0,
    quietZoneColor: 'transparent',
    // logo:"../demo/logo.png", // Relative address, relative to `easy.qrcode.min.js`
    // logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png", 
    // logoWidth:80, // widht. default is automatic width
    // logoHeight:80,// height. default is automatic height
    // logoBackgroundColor:'#fffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
    // logoBackgroundTransparent:false, // Whether use transparent image, default is false
  })
}