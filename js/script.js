function login() {

    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if (nome === 'eli' && senha == 1234) {
        document.getElementById('resultado').innerText = 'Você foi logado';
    } else {
        document.getElementById('resultado').innerText = 'Tente novamente';
    }
}
