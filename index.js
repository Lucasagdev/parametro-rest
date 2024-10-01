// function(a, b, ...args) {
//     ...
// }

function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
    
}

incentivarQuester('Parabéns por ter chego ao módulo Javascript avançado,', 'João', 'Pedro', 'Rafael')