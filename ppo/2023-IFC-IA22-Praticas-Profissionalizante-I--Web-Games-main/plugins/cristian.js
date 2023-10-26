const score = document.querySelector("main div.score")
const corretTypedLetters = document.createElement("span")

let counterCorrectTypedWords = 0
score.append(corretTypedLetters)






window.addEventListener("correctword", ev => {
  counterCorrectTypedWords++
  corretTypedLetters.innerText = counterCorrectTypedWords + " palavras corretas"
})

const css = document.createElement("link")
css.href = "plugins/cristian.css"
css.rel = "stylesheet"
document.head.appendChild(css)

document.querySelector("title").textContent = "GorillazTyper"

const icon = document.createElement("link")
icon.rel = "icon"
icon.href = "plugins/imagens/gorillaz-logo-png-transparent.png"
document.head.appendChild(icon)
