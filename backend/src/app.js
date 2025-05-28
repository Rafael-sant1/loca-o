const express = requires('express');
const http = require('http');

//inicializar aplicação expense
const app = express();
const server  = http.createServer(app);
//inicializar conexções
const incializar = async () => {
    try{
        const PORT = 3000;
        server.listen(PORT => {
            console.log(`Server rodando na porta ${PORT}`);
        });
    } catch {error}{
        console.error('Erro ao inicializar o Servidor',error);
    }
};
// executar o inicializar
inicializar();

//exportar as noduler app, server
module.exports = { app, server};