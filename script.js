document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA 1: ROLAGEM SUAVE ---
    const botaoSaibaMais = document.getElementById('btnSaibaMais');
    if (botaoSaibaMais) {
        botaoSaibaMais.addEventListener('click', () => {
            document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- LÓGICA 2: SIMULADOR INTERATIVO ---
    const botaoVerificar = document.getElementById('btnVerificar');
    const seletorOpcao = document.getElementById('opcaoQuiz');
    const caixaResultado = document.getElementById('resultadoQuiz');

    if (botaoVerificar && seletorOpcao && caixaResultado) {
        botaoVerificar.addEventListener('click', () => {
            const resposta = seletorOpcao.value;
            caixaResultado.style.display = "block";

            if (resposta === "positivo") {
                caixaResultado.innerHTML = "🌱 Excelente! Sua propriedade está alinhada ao futuro sustentável, conservando o solo e reduzindo emissões de carbono.";
                caixaResultado.style.backgroundColor = "#d4edda"; 
                caixaResultado.style.color = "#155724";
            } 
            else if (resposta === "neutro") {
                caixaResultado.innerHTML = "⚡ Bom caminho! A tecnologia ajuda a mitigar impactos, mas há espaço para adotar mais práticas biológicas e regenerativas.";
                caixaResultado.style.backgroundColor = "#fff3cd"; 
                caixaResultado.style.color = "#856404";
            } 
            else if (resposta === "negativo") {
                caixaResultado.innerHTML = "⚠️ Alerta de Impacto! O manejo intensivo tradicional esgota os recursos do solo. Considere migrar para tecnologias do Agro Forte.";
                caixaResultado.style.backgroundColor = "#f8d7da"; 
                caixaResultado.style.color = "#721c24";
            } 
            else {
                caixaResultado.innerHTML = "Por favor, selecione uma das práticas agrícolas listadas acima.";
                caixaResultado.style.backgroundColor = "#eee";
                caixaResultado.style.color = "#333";
            }
        });
    }

    // --- LÓGICA 3: FERRAMENTAS DE ACESSIBILIDADE ---
    const btnContraste = document.getElementById('btnContraste');
    const btnAumentarTexto = document.getElementById('btnAumentarTexto');
    const btnDiminuirTexto = document.getElementById('btnDiminuirTexto');
    
    // Tamanho padrão inicial do texto do site inteiro (em porcentagem)
    let tamanhoFonteAtual = 100;

    // Ação do botão de Alto Contraste
    if (btnContraste) {
        btnContraste.addEventListener('click', () => {
            // Liga/Desliga a classe de contraste estruturada no CSS
            document.body.classList.toggle('alto-contraste');
            
            // Atualiza o texto do botão para o usuário saber o que está ativo
            if (document.body.classList.contains('alto-contraste')) {
                btnContraste.textContent = "Desativar Alto Contraste";
            } else {
                btnContraste.textContent = "Ativar Alto Contraste";
            }
        });
    }

    // Ação de Aumentar Fonte
    if (btnAumentarTexto) {
        btnAumentarTexto.addEventListener('click', () => {
            if (tamanhoFonteAtual < 140) { // Define um limite máximo seguro de tamanho
                tamanhoFonteAtual += 10;
                document.documentElement.style.fontSize = tamanhoFonteAtual + '%';
            }
        });
    }

    // Ação de Diminuir Fonte
    if (btnDiminuirTexto) {
        btnDiminuirTexto.addEventListener('click', () => {
            if (tamanhoFonteAtual > 90) { // Define um limite mínimo seguro de tamanho
                tamanhoFonteAtual -= 10;
                document.documentElement.style.fontSize = tamanhoFonteAtual + '%';
            }
        });
    }
});
