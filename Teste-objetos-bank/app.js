
    let nameUserReg = document.getElementById("nomeCad")
    let cpfinput = document.getElementById("cpfCad")
    let passinput = document.getElementById("passCad")
    let passdef = document.getElementById("passConfirm")

    let cpfLog = document.getElementById("cpfLogin")
    let cpfLogNum = Number(cpfLog.value)
    let senhaLog = document.getElementById("senhaLogin")
    let senhaNumLog = Number(senhaLog.value)

    let cpfNum = Number(cpfinput.value)
    let passNum = Number(passinput.value)
    let passDef = Number(passdef.value)
    let dashboard = document.getElementById("dash")

    let password = 0

    let btnCadastrar = document.getElementById("btnSignUp")
    let btnEntrar = document.getElementById("btnSignIn")

    btnCadastrar.addEventListener("click", function(){
        if(passinput.value == passdef.value) {
            alert("Cadastro Realizado! Faça login")
        } else {
            alert("Erro os campos de senha não conferem")
        }
    })

    btnEntrar.addEventListener("click", function(){
        if (cpfLog.value == cpfNum && passdef.value == senhaLog.value) {
            let helloUser = document.getElementById("hello")
            let cardname = document.getElementById("nomeCard")
            let cpfUser = document.getElementById("cpfDash")
            let divLeft = document.getElementById("left")
            
            alert("Seja Bem Vindo!")
            cpfUser.innerHTML = `<strong>Cpf:</strong> ${cpfNum}`
            cardname.innerHTML = nameUserReg.value
            helloUser.innerHTML = `Olá ${nameUserReg.value}, Seja bem vindo!`

            divLeft.style.display = "none"
            dashboard.style.display = "flex"
            dashboard.style.width = "1290px"
        } else {
            alert("Senha ou CPF Inválidos!")
        }
    })

