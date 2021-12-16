function exibir() {
    var acucar = window.document.getElementsByName('acucar')
    var cafe = window.document.getElementsByName('cafe')
    var escafe = ''
    var esacucar = ''
    var msg = window.document.querySelector('div#msg')
    var preparar = window.document.querySelector('div#preparar')

    if (acucar[0].checked) {
        esacucar = "Sem açucar"
        msg.innerHTML = `A quantidade de açucar escolhada foi: ${esacucar}`
    } else if (acucar[1].checked) {
        esacucar = "Pouco açucar"
        msg.innerHTML = `A quantidade de açucar escolhada foi: ${esacucar}`
    } else if (acucar[2].checked) {
        esacucar = "Médio açucar"
        msg.innerHTML = `A quantidade de açucar escolhada foi: ${esacucar}`
    } else if (acucar[3].checked) {
        esacucar = "Muito açucar"
        msg.innerHTML = `A quantidade de açucar escolhido foi: ${esacucar}`
    } else {
        window.alert("escolha uma opção de açucar")
    }

    if (cafe[0].checked) {
        escafe = "Café curto"
        preparar.innerHTML = `o tipo de café escolhido foi: ${escafe}`
    } else if (cafe[1].checked) {
        escafe = "Café longo"
        preparar.innerHTML = `O tipo de café escolhido foi: ${escafe}`
    } else if (cafe[2].checked) {
        escafe = "Café preto"
        preparar.innerHTML = `O tipo de café escolhido foi: ${escafe}`
    } else if (cafe[3].checked) {
        escafe = "Capuccino"
        preparar.innerHTML = `O tipo de café escolhido foi: ${escafe}`
    } else if (cafe[4].checked) {
        escafe = "Mocaccino"
        preparar.innerHTML = `O tipo de café escolhido foi: ${escafe}`
    } else if (cafe[5].checked) {
        escafe = "Chocolate";
        preparar.innerHTML = `Sua escolha foi: ${escafe}`
    } else {
        window.alert("escolha uma opção de café")
    }

}