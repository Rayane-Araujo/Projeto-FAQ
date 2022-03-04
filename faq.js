//Buscar os itens da tela
const itensPerguntasERespostas = document.querySelectorAll('.item');

//Entender que o item foi clicado
itensPerguntasERespostas.forEach(function(item){
    item.addEventListener('click', function(){

        //Verificar se a pergunta clicada está  ativa  
        const estaAtiva = item.classList.contains('ativo')

        //Se a pergunta não está ativa
        if(!estaAtiva) {
            //Eu preciso fechar as outras
            itensPerguntasERespostas.forEach(function(item){
               item.classList.remove('ativo')
            }) 
        //Abrir a resposta atual 
            item.classList.add('ativo')

    // Se a pergunta estiver ativa: 
    } else {

        //Desativar(REMOVERIA A CLASSE ATIVO)*/ 
        item.classList.remove('ativo')


        }

     })
});
