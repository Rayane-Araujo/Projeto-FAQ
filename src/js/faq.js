
const itensPerguntasERespostas = document.querySelectorAll('.item');


itensPerguntasERespostas.forEach(function (item) {
    item.addEventListener('click', function () {

        const estaAtiva = item.classList.contains('ativo')

        if (!estaAtiva) {
            itensPerguntasERespostas.forEach(function (item) {
                item.classList.remove('ativo')
            })
            item.classList.add('ativo')

        } else {
            item.classList.remove('ativo')
        }
    })
});
