//console.dir(livros)
//console.log(livros[2]) // mostrar 1 valor
//livros[3] = "Drama" // alterar 1 valor
//console.dir(livros)
//livros.push("Fantasia") // adiciona um valor
//console.dir(livros)

let livrosCategoria = new Array()
livrosCategoria.push("Terror")
livrosCategoria.push("Fantasia")
livrosCategoria.push("Drama")
livrosCategoria.push("Romance")
livrosCategoria.push("Ficção Científica")
console.dir(livrosCategoria)

document.getElementById("conteudo").innerHTML = "<ul>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[0] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[1] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[2] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[3] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + livrosCategoria[4] + "</li>"
document.getElementById("conteudo").innerHTML += "</ul>"