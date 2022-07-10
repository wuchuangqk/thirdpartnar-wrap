(function flexible(window, document) {
  const doc = document.documentElement
  function setRemUnit() {
    const width = doc.clientWidth || document.body.clientWidth
    let rem = width / 7.5
    if (rem > 100) {
      rem = 100
    }
    doc.style.fontSize = rem + "px"
  }
  setRemUnit()
  window.addEventListener('resize', setRemUnit)
}(window, document))

export { }