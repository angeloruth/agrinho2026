document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================================
    // LÓGICA 1: ROLAGEM SUAVE DOS LINKS DE NAVEGAÇÃO INTERNA
    // =========================================================================
    const linksMenu = document.querySelectorAll('header nav a[href^="#"]');
    
    linksMenu.forEach(link => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault(); // Impede o salto seco e abrupto do navegador
            
            const idAlvo = link.getAttribute('href').substring(1);
            const elementoAlvo = document.getElementById(idAlvo);
            
            if (elementoAlvo) {
                // Desliza a tela elegantemente até o início da seção desejada
                elementoAlvo.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Botão auxiliar Saiba Mais do painel principal (Hero)
    const btnSaibaMais = document.getElementById('btnSaibaMais');
    if (btnSaibaMais) {
        btnSaibaMais.addEventListener('click', () => {
            document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // =========================================================================
    // LÓGICA 2: CONTROLE E ACESSIBILIDADE DO MENU LATERAL INOVADOR (SIDEBAR)
    // =========================================================================
    const btnAbrirSidebar = document.getElementById('btnAbrirMenuLateral');
    const btnFecharSidebar = document.getElementById('btnFecharMenuLateral');
    const sidebar = document.getElementById('menuLateral');
    const overlay = document.getElementById('overlaySidebar');

    if (btnAbrirSidebar && btnFecharSidebar && sidebar && overlay) {
        
        // Função para abrir o painel de tópicos
        btnAbrirSidebar.addEventListener('click', () => {
            sidebar.classList.add('aberto');
            overlay.classList.add('visivel');
            
            // Atualiza os estados para os leitores de tela de acessibilidade (Nível 4 WCAG)
            btnAbrirSidebar.setAttribute('aria-expanded', 'true');
            sidebar.setAttribute('aria-hidden', 'false');
            
            // Joga o foco do teclado no botão fechar para facilitar navegação via Tab
            btnFecharSidebar.focus();
        });

        // Função para fechar o painel de tópicos
        const fecharPainelLateral = () => {
            sidebar.classList.remove('aberto');
            overlay.classList.remove('visivel');
            
            btnAbrirSidebar.setAttribute('aria-expanded', 'false');
            sidebar.setAttribute('aria-hidden', 'true');
            
            // Devolve o foco de navegação para o botão inicial do topo
            btnAbrirSidebar.focus();
        };

        btnFecharSidebar.addEventListener('click', fecharPainelLateral);
        overlay.addEventListener('click', fecharPainelLateral);
    }

    // =========================================================================
    // LÓGICA 3: SISTEMA DE ABAS INTERNAS DO MENU LATERAL (5 TÓPICOS)
    // =========================================================================
    const botoesTopicos = document.querySelectorAll('.btn-topico');
    const conteudosTopicos = document.querySelectorAll('.conteudo-aba');

    botoesTopicos.forEach(botao => {
        botao.addEventListener('click', () => {
            // Descobre qual tópico foi clicado através do marcador data-target
            const idAlvoAba = botao.getAttribute('data-target');

            // 1. Remove a marca de "ativo" de todos os botões da lista lateral
            botoesTopicos.forEach(b => b.classList.remove('ativo'));
            
            // 2. Esconde todos os textos explicativos que estavam aparecendo
            conteudosTopicos.forEach(c => c.classList.remove('ativo'));

            // 3. Ativa e destaca apenas o botão que o usuário clicou
            botao.classList.add('ativo');
            
            // 4. Mostra na tela o texto explicativo correspondente ao botão clicado
            document.getElementById(idAlvoAba).classList.add('ativo');
        });
    });

    // =========================================================================
    // LÓGICA 4: SIMULADOR INTERATIVO (DIAGNÓSTICO MATEMÁTICO DE PONTOS)
    // =========================================================================
    const botaoVerificar = document.getElementById('btnVerificar');
    const caixaResultado = document.getElementById('resultadoQuiz');

    if (botaoVerificar && caixaResultado) {
        botaoVerificar.addEventListener('click', () => {
            // Puxa as notas de cada uma das 3 perguntas do quiz
            const r1 = document.getElementById('p1').value;
            const r2 = document.getElementById('p2').value;
            const r3 = document.getElementById('p3').value;

            // Validação de Segurança: impede o processamento se houver campo vazio
            if (r1 === "" || r2 === "" || r3 === "") {
                caixaResultado.style.display = "block";
                caixaResultado.innerHTML = "⚠️ Por favor, selecione uma resposta para todas as 3 perguntas antes de calcular.";
                caixaResultado.style.backgroundColor = "#ffe3e3";
                caixaResultado.style.color = "#b10000";
                caixaResultado.style.border = "1px solid #ffb7b7";
                return; // Bloqueia a execução do cálculo
            }

            // Transforma os textos das opções em números inteiros e calcula a soma
            const pontosTotais = parseInt(r1) + parseInt(r2) + parseInt(r3);
            
            // Executa a regra de três e arredonda para gerar uma porcentagem de 0 a 100
            const notaFinal = Math.round((pontosTotais / 30) * 100);
            
            // Torna o bloco invisível de resultados visível na página
            caixaResultado.style.display = "block";

            // Avalia a nota final gerando designs e textos específicos por categoria
            if (notaFinal >= 80) {
                caixaResultado.innerHTML = `🌱 <strong>Nota: ${notaFinal}/100 - Agro Sustentável Excelente!</strong><br><br>Sua propriedade é referência em sustentabilidade. Suas práticas conservam a biodiversidade, reduzem a pegada de carbono e garantem alta produção com respeito ao bioma.`;
                caixaResultado.style.backgroundColor = "#d4edda"; 
                caixaResultado.style.color = "#155724";
                caixaResultado.style.border = "1px solid #c3e6cb";
            } 
            else if (notaFinal >= 40) {
                caixaResultado.innerHTML = `⚡ <strong>Nota: ${notaFinal}/100 - Agro em Transição!</strong><br><br>Você já aplica tecnologia útil em campo, mas ainda depende muito de métodos invasivos tradicionais. Considere expandir o uso de bioinsumos para proteger seu solo a longo prazo.`;
                caixaResultado.style.backgroundColor = "#fff3cd"; 
                caixaResultado.style.color = "#856404";
                caixaResultado.style.border = "1px solid #ffeeba";
            } 
            else {
                caixaResultado.innerHTML = `⚠️ <strong>Nota: ${notaFinal}/100 - Alerta Crítico!</strong><br><br>O uso excessivo de recursos tradicionais e químicos está esgotando a resiliência da sua terra. Recomendamos uma consultoria urgente em tecnologias de agricultura regenerativa de precisão.`;
                caixaResultado.style.backgroundColor = "#f8d7da"; 
                caixaResultado.style.color = "#721c24";
                caixaResultado.style.border = "1px solid #f5c6cb";
            }
        });
    }

    // =========================================================================
    // LÓGICA 5: FERRAMENTAS DE ACESSIBILIDADE WCAG (ZOOM E CONTRASTE)
    // =========================================================================
    const btnContraste = document.getElementById('btnContraste');
    const btnAumentarTexto = document.getElementById('btnAumentarTexto');
    const btnDiminuirTexto = document.getElementById('btnDiminuirTexto');
    let tamanhoFonteAtual = 100;

    // Disparador de Alto Contraste (Cores adaptáveis para daltonismo e baixa visão)
    if (btnContraste) {
        btnContraste.addEventListener('click', () => {
            document.body.classList.toggle('alto-contraste');
            btnContraste.textContent = document.body.classList.contains('alto-contraste') 
                ? "Desativar Alto Contraste" 
                : "Ativar Alto Contraste";
        });
    }

    // Ampliador de Letras proporcional (Altera a raiz REM da página inteira)
    if (btnAumentarTexto) {
        btnAumentarTexto.addEventListener('click', () => {
            if (tamanhoFonteAtual < 140) { // Trava de segurança para não explodir o layout
                tamanhoFonteAtual += 10;
                document.documentElement.style.fontSize = tamanhoFonteAtual + '%';
            }
        });
    }

    // Redutor de Letras proporcional
    if (btnDiminuirTexto) {
        btnDiminuirTexto.addEventListener('click', () => {
            if (tamanhoFonteAtual > 90) { // Limite mínimo legível
                tamanhoFonteAtual -= 10;
                document.documentElement.style.fontSize = tamanhoFonteAtual + '%';
            }
        });
    }
});
