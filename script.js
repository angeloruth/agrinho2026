document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================================
    // LÓGICA 1: ROLAGEM SUAVE
    // =========================================================================
    const botaoSaibaMais = document.getElementById('btnSaibaMais');
    if (botaoSaibaMais) {
        botaoSaibaMais.addEventListener('click', () => {
            document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // =========================================================================
    // LÓGICA 2: SIMULADOR INTERATIVO (MATEMÁTICA E MANIPULAÇÃO DO DOM)
    // =========================================================================
    const botaoVerificar = document.getElementById('btnVerificar');
    const caixaResultado = document.getElementById('resultadoQuiz');

    if (botaoVerificar && caixaResultado) {
        botaoVerificar.addEventListener('click', () => {
            const r1 = document.getElementById('p1').value;
            const r2 = document.getElementById('p2').value;
            const r3 = document.getElementById('p3').value;

            if (r1 === "" || r2 === "" || r3 === "") {
                caixaResultado.style.display = "block";
                caixaResultado.innerHTML = "⚠️ Por favor, responda a todas as 3 perguntas antes de calcular.";
                caixaResultado.style.backgroundColor = "#ffe3e3";
                caixaResultado.style.color = "#b10000";
                return; 
            }

            const pontosTotais = parseInt(r1) + parseInt(r2) + parseInt(r3);
            const notaFinal = Math.round((pontosTotais / 30) * 100);
            caixaResultado.style.display = "block";

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
    // LÓGICA 3: CONTROLES DO MENU LATERAL RETRÁTIL (SIDEBAR + ACESSIBILIDADE ARIA)
    // =========================================================================
    const btnAbrirSidebar = document.getElementById('btnAbrirMenuLateral');
    const btnFecharSidebar = document.getElementById('btnFecharMenuLateral');
    const sidebar = document.getElementById('menuLateral');
    const overlay = document.getElementById('overlaySidebar');

    if (btnAbrirSidebar && btnFecharSidebar && sidebar && overlay) {
        
        // Função para abrir o painel lateral
        btnAbrirSidebar.addEventListener('click', () => {
            sidebar.classList.add('aberto');
            overlay.classList.add('visivel');
            btnAbrirSidebar.setAttribute('aria-expanded', 'true');
            sidebar.setAttribute('aria-hidden', 'false');
            btnFecharSidebar.focus(); // Joga o foco do teclado no botão de fechar para acessibilidade
        });

        // Função para fechar o painel lateral
        const fecharMenu = () => {
            sidebar.classList.remove('aberto');
            overlay.classList.remove('visivel');
            btnAbrirSidebar.setAttribute('aria-expanded', 'false');
            sidebar.setAttribute('aria-hidden', 'true');
            btnAbrirSidebar.focus(); // Retorna o foco ao botão de abertura original
        };

        btnFecharSidebar.addEventListener('click', fecharMenu);
        overlay.addEventListener('click', fecharMenu);
    }

    // =========================================================================
    // LÓGICA 4: FERRAMENTAS DE ACESSIBILIDADE (ZOOM & CONTRASTE)
    // =========================================================================
    const btnContraste = document.getElementById('btnContraste');
    const btnAumentarTexto = document.getElementById('btnAumentarTexto');
    const btnDiminuirTexto = document.getElementById('btnDiminuirTexto');
    let tamanhoFonteAtual = 100;

    if (btnContraste) {
        btnContraste.addEventListener('click', () => {
            document.body.classList.toggle('alto-contraste');
            btnContraste.textContent = document.body.classList.contains('alto-contraste') 
                ? "Desativar Alto Contraste" 
                : "Ativar Alto Contraste";
        });
    }

    if (btnAumentarTexto) {
        btnAumentarTexto.addEventListener('click', () => {
            if (tamanhoFonteAtual < 140) {
                tamanhoFonteAtual += 10;
                document.documentElement.style.fontSize = tamanhoFonteAtual + '%';
            }
        });
    }

    if (btnDiminuirTexto) {
        btnDiminuirTexto.addEventListener('click', () => {
            if (tamanhoFonteAtual > 90) {
                tamanhoFonteAtual -= 10;
                document.documentElement.style.fontSize = tamanhoFonteAtual + '%';
            }
        });
    }
});
