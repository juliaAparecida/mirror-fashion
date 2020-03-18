let campoEmail = form.querySelector("#email")
let campoCpf = form.querySelector("#cpf")
let campoNewsletter = form.querySelector("#newsletter")
let botao = form.querySelector("#confirmar-pedido")

/*
- o minimo de caracteres que um nome precisa ter é 5 (nome)
- email válido (email)
- cpf válido (cpf)
- senão prencher o email e a newsletter estiver marcada, jogar uma mensagem de alerta (newsletter)
*/
botao.addEventListener("click", submit)

function submit(event) {
    event.preventDefault()
    var form = document.querySelector("form")
    let campoNome = form.querySelector("#nome")
    validaNome(campoNome)
    validaEmail("julia.araujo@caelum.com.br")
    vailidaCpf("47758865544")
    validaNewsletter()
}

function validaNome (nome) { 
    console.log(nome.textContent.length)
    if ( nome.textContent.length < 5) {
        nome.classList.add("form__control-invalid");      
    }
}

function validaEmail (email) {
    console.log(email)
}

function vailidaCpf (cpf) {
    console.log(cpf)
}

function validaNewsletter (newsletter) {
    console.log(newsletter)
}
