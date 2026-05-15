document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================================
    // LÓGICA 1: ROLAGEM SUAVE (NAVEGAÇÃO FLUIDA)
    // =========================================================================
    const botaoSaibaMais = document.getElementById('btnSaibaMais');
    if (botaoSaibaMais) {
        botaoSaibaMais.addEventListener('click', () => {
            // Executa o deslizamento suave até a seção de pilares
            document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // =========================================================================
    // LÓGICA 2: SIMULADOR INTERATIVO (MANIPULAÇÃO DO DOM E CÁLCULO DE VARIÁVEIS)
    // =========================================================================
    const botaoVerificar = document.getElementById('btnVerificar');
    const caixaResultado = document.getElementById('resultadoQuiz');

    if (botaoVerificar && caixaResultado) {
        botaoVerificar.addEventListener('click', () => {
            // Captura as strings de valores numéricos de cada seletor de pergunta
            const r1 = document.getElementById('p1').value;
            const r2 = document.getElementById('p2').value;
            const r3 = document.getElementById('p3').value;

            // Validação de segurança: impede cálculos vazios se o usuário pular itens
            if (r1 === "" || r2 === "" || r3 === "") {
                caixaResultado.style.display = "block";
                caixaResultado.innerHTML = "⚠️ Por favor, responda a todas as 3 perguntas antes de calcular.";
                caixaResultado.style.backgroundColor = "#ffe3e3";
                caixaResultado.style.color = "#b10000";
                return; // Interrompe a execução
            }

            // Conversão de tipos de dados para inteiros e cálculo da soma total de pontos
            const pontosTotais = parseInt(r1) + parseInt(r2) + parseInt(r3);

            // Regra matemática proporcional para conversão da pontuação em escala percentual (0 a 100)
            const notaFinal = Math.round((pontosTotais / 30) * 100);

            // Altera dinamicamente a visibilidade e o conteúdo da div de feedback (Manipulação do DOM)
            caixaResultado.style.display = "block";

            // Estrutura de decisão para aplicar feedbacks visuais e textuais personalizados
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

    // =========================================================================
    // LÓGICA 3: FERRAMENTAS DE ACESSIBILIDADE (CONTROLE DE INTERFACE VIA SCRIPT)
    // =========================================================================
    const btnContraste = document.getElementById('btnContraste');
    const btnAumentarTexto = document.getElementById('btnAumentarTexto');
    const btnDiminuirTexto = document.getElementById('btnDiminuirTexto');
    
    // Variável de controle do multiplicador de tamanho de fonte padrão
    let tamanhoFonteAtual = 100;

    // Gerenciador do mecanismo de alternância de Alto Contraste (WCAG)
    if (btnContraste) {
        btnContraste.addEventListener('click', () => {
            // Adiciona ou remove a classe modificadora no elemento raiz body
            document.body.classList.toggle('alto-contraste');
            
            // Tratamento dinâmico de rótulo para leitores de tela
            if (document.body.classList.contains('alto-contraste')) {
                btnContraste.textContent = "Desativar Alto Contraste";
            } else {
                btnContraste.textContent = "Ativar Alto Contraste";
            }
        });
    }

    // Gerenciador do mecanismo de ampliação de fontes por acessibilidade
    if (btnAumentarTexto) {
        btnAumentarTexto.addEventListener('click', () => {
            // Limita o zoom máximo em 140% para preservar as dimensões dos blocos do CSS
            if (tamanhoFonteAtual < 140) {
                tamanhoFonteAtual += 10;
                document.documentElement.style.fontSize = tamanhoFonteAtual + '%';
            }
        });
    }

    // Gerenciador do mecanismo de redução de fontes por acessibilidade
    if (btnDiminuirTexto) {
        btnDiminuirTexto.addEventListener('click', () => {
            // Limita o recuo mínimo em 90% por diretrizes de segurança visual
            if (tamanhoFonteAtual > 90) {
                tamanhoFonteAtual -= 10;
                document.documentElement.style.fontSize = tamanhoFonteAtual + '%';
            }
        });
    }
});
