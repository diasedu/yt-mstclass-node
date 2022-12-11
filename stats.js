/* 
    * ESTE PROGRAMA TEM COMO OBJETIVO NOS MOSTRAR:
        1 A QUANTIDADE DE MEMÓRIA LIVRE
        2 A QUANTIDADE DE MEMÓRIA TOTAL
        3 A PORCENTAGEM DE MEMÓRIA EM USO
    *
*/

const os = require('os');
const log = require('./logger');

// console.log(os);

// A FUNÇÃO SETINTERVAL IRÁ EXECUTAR UM LOOPING(PRECISA PASSAR A FUNÇÃO A SER EXECUTADA COMO PRIMEIRO PARAMETRO E A QUANTIDADE DE MILISSEGUNDOS QUE VAI ATUALIZAR NA TELA. ESTE É O SEGUNDO PARAMETRO)
setInterval(() => {

    // NA LINHA ABAIXO ESTAREMOS DESESTRUTURANDO OS MÉTODOS FREEMEM E TOTALMEM DO OBJETO OS
    const { freemem, totalmem } = os;

    // console.log(`${parseInt(freemem() / 1024 / 1024)} MB`, totalmem());


    const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 1024);
    const percents = parseInt((mem / total) * 100);

    // console.log(mem, total, percents);

    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} MB`
    }

    // A LINHA ABAIXO LIMPA A TELA PARA MOSTRAR OS ESTADOS DE MEMÓRIA NOS FUTUROS SEGUNDOS
    console.clear();
    console.log(" === PC STATUS ===");

    // CONSOLE.TABLE NOS MOSTRA UMA TABELA COM UM OBJETO DENTRO
    console.table(stats);

    log(`${JSON.stringify(stats)}\n`);

}, 1000);

