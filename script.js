const h1 = document.getElementById('text')

const texts = [
  'Hello, My name is ANEX JERIN',
  'I love to code',
  'Nice to see you',
]
let j = 0
let i = 0
let currentText = []
let deleting = false
function loop() {
  h1.innerText = currentText.join('')
  console.log(i)
  if (i < texts.length) {
    if (!deleting && j <= texts[i].length) {
      currentText.push(texts[i][j])
      j++
    }
    if (deleting && j <= texts[i].length) {
      currentText.pop(texts[i][j])
      j--
    }

    if (j==texts[i].length){
        deleting = true
    }
  }
  setTimeout(loop, 200)
}

loop()
