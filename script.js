/* SEGURANÇA: Avisa o navegador para ler todo o HTML antes de ativar o código abaixo */
document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. Procura o botão no HTML que tem o marcador id="btnSaibaMais" e guarda ele */
    const meuBotao = document.getElementById('btnSaibaMais');

    /* 2. Cria um "sensor" que fica vigiando o botão e esperando por um clique */
    meuBotao.addEventListener('click', () => {
        
        /* 3. Quando o clique acontece, procura a seção id="pilares" */
        const secaoPilares = document.getElementById('pilares');
        
        /* 4. Faz a tela deslizar até essa seção de forma bem suave */
        secaoPilares.scrollIntoView({ 
            behavior: 'smooth' /* O comando "smooth" significa rolagem macia/suave */
        });
        
    });
});

