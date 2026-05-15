document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA 1: ROLAGEM SUAVE ---
    const botaoSaibaMais = document.getElementById('btnSaibaMais');
    if (botaoSaibaMais) {
        botaoSaibaMais.addEventListener('click', () => {
            document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
        });
    }

       // --- LÓGICA 2: SIMULADOR INTERATIVO (SISTEMA DE PONTOS) ---
    const botaoVerificar = document.getElementById('btnVerificar');
    const caixaResultado = document.getElementById('resultadoQuiz');

    if (botaoVerificar && caixaResultado) {
        botaoVerificar.addEventListener('click', () => {
            // Captura os valores selecionados em cada uma das três perguntas
            const r1 = document.getElementById('p1').value;
            const r2 = document.getElementById('p2').value;
            const r3 = document.getElementById('p3').value;

            // Validação de Segurança: impede o cálculo se faltar responder algo
            if (r1 === "" || r2 === "" || r3 === "") {
                caixaResultado.style.display = "block";
                caixaResultado.innerHTML = "⚠️ Por favor, responda a todas as 3 perguntas antes de calcular.";
                caixaResultado.style.backgroundColor = "#ffe3e3";
                caixaResultado.style.color = "#b10000";
                return; // Interrompe a execução da função
            }

            // Soma os pontos convertendo os textos em números inteiros (Máximo de 30 pontos)
            const pontosTotais = parseInt(r1) + parseInt(r2) + parseInt(r3);
            
            // Regra de três matemática para transformar a pontuação em nota de 0 a 100
            const notaFinal = Math.round((pontosTotais / 30) * 100);

            // Exibe a caixa de resultado
            caixaResultado.style.display = "block";

            // Altera o design e a resposta com base na pontuação atingida
            if (notaFinal >= 80) {
                caixaResultado.innerHTML = `🌱 <strong>Nota: ${notaFinal}/100 - Agro Sustentável Excelente!</strong><br><br>Sua propriedade é referência em sustentabilidade. Suas práticas conservam a biodiversidade, reduzem a pegada de carbono e garantem alta produção com respeito ao bioma.`;
                caixaResultado.style.backgroundColor = "#d4edda"; 
                caixaResultado.style.color = "#155724";
            } 
            else if (notaFinal >= 40) {
                caixaResultado.innerHTML = `⚡ <strong>Nota: ${notaFinal}/100 - Agro em Transição!</strong><br><br>Você já aplica tecnologia útil em campo, mas ainda depende muito de métodos invasivos tradicionais. Considere expandir o uso de bioinsumos para proteger seu solo a longo prazo.`;
                caixaResultado.style.backgroundColor = "#fff3cd"; 
                caixaResultado.style.color = "#856404";
            } 
            else {
                caixaResultado.innerHTML = `⚠️ <strong>Nota: ${notaFinal}/100 - Alerta Crítico!</strong><br><br>O uso excessivo de recursos tradicionais e químicos está esgotando a resiliência da sua terra. Recomendamos uma consultoria urgente em tecnologias de agricultura regenerativa de precisão.`;
                caixaResultado.style.backgroundColor = "#f8d7da"; 
                caixaResultado.style.color = "#721c24";
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
