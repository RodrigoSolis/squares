var timeout = TimeRanges.Timeout

const drawContainer = (containerSize, childSize, numberOfChildren) => {

  let main = document.getElementById('mainSquare')
  main.style.width = `${containerSize}px`
  main.style.height = `${containerSize}px`

  const possibleElements = Math.pow(Math.floor(containerSize / childSize), 2)

  const elementsToRender = numberOfChildren <= possibleElements ? numberOfChildren : possibleElements

  for (let i = 0; i < elementsToRender; i++) {
    let squareChild = document.createElement('div')
    squareChild.addEventListener('mouseover', changeColor, false)
    squareChild.addEventListener('mouseleave', resetTimer, false)
    squareChild.className = 'squareChild'
    squareChild.style.width = `${childSize}px`
    squareChild.style.height = `${childSize}px`
    squareChild.style.flexShrink = 0
    squareChild.style.backgroundColor = backgroundColor()
    main.appendChild(squareChild)
  }

  if (numberOfChildren > elementsToRender) {
    let message = document.createElement('h1')
    message.appendChild(document.createTextNode(`Elementos renderizados: ${elementsToRender}`))
    document.body.appendChild(message)
  }

}

function backgroundColor() {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)

  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

function changeColor () {
  this.style.backgroundColor = backgroundColor()
  timeout = window.setTimeout(() => {
    this.style.visibility = 'hidden'
  }, 2000)
}

function resetTimer () {
  window.clearTimeout(timeout)
}


drawContainer(200, 50, 17)
