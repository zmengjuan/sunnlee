import html2canvas from 'html2canvas'

export default function  generate (el,) {
  html2canvas(el).then(canvas => {
    let div = document.createElement('div')
    div.className = 'wrap'
    let img = new Image
    img.src = canvas.toDataURL('image/jpeg')
    img.className='html2canvasImg'
    img.style.cssText += 'width: 100%; display: block;'
    div.append(img)
    el.append(div)
  })
}