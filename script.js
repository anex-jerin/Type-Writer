const h1 = document.getElementById('text')

const texts = [
  'Hello, My name is ANEX JERIN ',
  'I love to code ',
  'Nice to see you ',
]
let j = 0
let i = 0
let currentText = []
let deleting = false
function loop() {
  h1.innerText = currentText.join('')
  if (i < texts.length) {
    if (!deleting && j <= texts[i].length) {
      currentText.push(texts[i][j])
      j++
      console.log('adding letter');
    }
    if (deleting && j <= texts[i].length && j>=1) {
      currentText.pop(texts[i][j])
      j--
      console.log('removing letter');
    }

    if (j==texts[i].length){
        deleting = true
    }
    if (deleting && j==0)
    {
      i++
      deleting = false
      if(i == texts.length){
        i=0
      }
    }
  }
  const speed = Math.floor(Math.random()*4+1)
  setTimeout(loop, speed*100)
}

loop()
