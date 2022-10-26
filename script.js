const h1 = document.getElementById('text')

const texts = ['Hello, My name is ANEX JERIN', 'I love to code', 'Nice to see you']
let j = 0
let i = 0
let currentText = []
function loop() {
  h1.innerText = currentText.join('')
  console.log(i);
  if (i < texts.length) {
    if (j <= texts[i].length) {
      currentText.push(texts[i][j])
      j++
    }
    if (j == texts[i].length) {
      i++
    }
  }
  setTimeout(loop, 200)
}

loop()
