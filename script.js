document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================================
    // LÓGICA 1: ROLAGEM SUAVE (CORREÇÃO DE LINKS DO MENU)
    // =========================================================================
    const botaoSaibaMais = document.getElementById('btnSaibaMais');
    if (botaoSaibaMais) {
        botaoSaibaMais.addEventListener('click', () => {
            document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Intercepta todos os cliques em links internos de navegação do menu para garantir rolagem fluida
    const linksMenu = document.querySelectorAll('header nav a[href^="#"]');
    linksMenu.forEach(link => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault(); // Impede o salto seco padrão do navegador
            const idAlvo = link.getAttribute('href').substring(1);
            const elementoAlvo = document.getElementById(idAlvo);
            
            if (elementoAlvo) {
                elementoAlvo.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // =========================================================================
    // LÓGICA 2: SIMULADOR INTERATIVO (CÁLCULO E MANIPULAÇÃO DO DOM)
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
    // LÓGICA 3: CONTROLES DE ABERTURA E FECHAMENTO DO MENU LATERAL (SIDEBAR)
    // =========================================================================
    const btnAbrirSidebar = document.getElementById('btnAbrirMenuLateral');
    const btnFecharSidebar = document.getElementById('btnFecharMenuLateral');
    const sidebar = document.getElementById('menuLateral');
    const overlay = document.getElementById('overlaySidebar');

    if (btnAbrirSidebar && btnFecharSidebar && sidebar && overlay) {
        
        btnAbrirSidebar.addEventListener('click', () => {
            sidebar.classList.add('aberto');
            overlay.classList.add('visivel');
            btnAbrirSidebar.setAttribute('aria-expanded', 'true');
            sidebar.setAttribute('aria-hidden', 'false');
            btnFecharSidebar.focus(); // Acessibilidade: direciona o foco para o botão fechar
        });

        const fecharMenu = () => {
            sidebar.classList.remove('aberto');
            overlay.classList.remove('visivel');
            btnAbrirSidebar.setAttribute('aria-expanded', 'false');
            sidebar.setAttribute('aria-hidden', 'true');
            btnAbrirSidebar.focus(); // Acessibilidade: retorna o foco ao botão de abertura
        };

        btnFecharSidebar.addEventListener('click', fecharMenu);
        overlay.addEventListener('click', fecharMenu);
    }

    // =========================================================================
    // LÓGICA 4: TRANSIÇÃO DOS SLIDES DA GALERIA (MENU LATERAL)
    // =========================================================================
    const slides = document.querySelectorAll('.galeria-slide');
    const btnAnterior = document.getElementById('btnSlideAnterior');
    const btnProximo = document.getElementById('btnSlideProximo');
    let indiceSlideAtual = 0;

    function atualizarExibicaoSlides(novoIndice) {
        // Remove a classe ativa do slide que estava aparecendo
        slides[indiceSlideAtual].classList.remove('ativo');
        
        // Atualiza o índice garantindo um loop infinito circular
        if (novoIndice >= slides.length) {
            indiceSlideAtual = 0;
        } else if (novoIndice < 0) {
            indiceSlideAtual = slides.length - 1;
        } else {
            indiceSlideAtual = novoIndice;
        }
        
        // Adiciona a classe ativa no novo slide correspondente
        slides[indiceSlideAtual].classList.add('ativo');
    }

    if (btnAnterior && btnProximo && slides.length > 0) {
        // Clique na seta para avançar imagem
        btnProximo.addEventListener('click', () => {
            atualizarExibicaoSlides(indiceSlideAtual + 1);
        });

        // Clique na seta para voltar imagem
        btnAnterior.addEventListener('click', () => {
            atualizarExibicaoSlides(indiceSlideAtual - 1);
        });
    }

    // =========================================================================
    // LÓGICA 5: FERRAMENTAS DE ACESSIBILIDADE (ZOOM DE FONTE & ALTO CONTRASTE)
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
