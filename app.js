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

document.getElementById("conteudo").innerHTML = livrosCategoria[0] + " - "
document.getElementById("conteudo").innerHTML += livrosCategoria[1] + " - "
document.getElementById("conteudo").innerHTML += livrosCategoria[2] + " - "
document.getElementById("conteudo").innerHTML += livrosCategoria[3] + " - "
document.getElementById("conteudo").innerHTML += livrosCategoria[4]