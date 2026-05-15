document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================================
    // LÓGICA 1: ROLAGEM NATAL E MAPEAMENTO DE ÂNCORAS
    // =========================================================================
    const botaoSaibaMais = document.getElementById('btnSaibaMais');
    if (botaoSaibaMais) {
        botaoSaibaMais.addEventListener('click', () => {
            const secaoPilares = document.getElementById('pilares');
            if (secaoPilares) {
                secaoPilares.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Intercepta de forma segura a navegação do menu nativo do HTML para links com "#"
    const linksNavegacao = document.querySelectorAll('.link-navegacao');
    linksNavegacao.forEach(link => {
        link.addEventListener('click', (evento) => {
            const idAlvo = link.getAttribute('href');
            
            // Tratamento especial: se o id for apenas "#", ignora o preventDefault
            if (idAlvo.startsWith('#') && idAlvo.length > 1) {
                evento.preventDefault(); 
                const elementoAlvo = document.querySelector(idAlvo);
                if (elementoAlvo) {
                    elementoAlvo.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // =========================================================================
    // LÓGICA 2: SIMULADOR DE SUSTENTABILIDADE (PRODUÇÃO DE DADOS NO DOM)
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
    // LÓGICA 3: CONTROLE DE FLUXO DO MENU LATERAL (SIDEBAR REATIVO)
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
            btnFecharSidebar.focus();
        });

        const fecharMenu = () => {
            sidebar.classList.remove('aberto');
            overlay.classList.remove('visivel');
            btnAbrirSidebar.setAttribute('aria-expanded', 'false');
            sidebar.setAttribute('aria-hidden', 'true');
            btnAbrirSidebar.focus();
        };

        btnFecharSidebar.addEventListener('click', fecharMenu);
        overlay.addEventListener('click', fecharMenu);
    }

    // =========================================================================
    // LÓGICA 4: CARROSSEL DE FOTOS DESLIZANTE (INTERATIVIDADE PREMIUM)
    // =========================================================================
    const trilho = document.getElementById('carrosselTrilho');
    const slides = document.querySelectorAll('.carrossel-slide');
    const btnAnterior = document.getElementById('btnSlideAnterior');
    const btnProximo = document.getElementById('btnSlideProximo');
    
    let indiceAtual = 0;
    const totalSlides = slides.length;

    function moverCarrossel(novoIndice) {
        // Validação circular infinita para as pontas do carrossel
        if (novoIndice >= totalSlides) {
            indiceAtual = 0;
        } else if (novoIndice < 0) {
            indiceAtual = totalSlides - 1;
        } else {
            indiceAtual = novoIndice;
        }

        // Calcula a porcentagem exata de deslocamento baseado na largura de 1 slide (100% / número total de slides)
        // Como o trilho tem 300% de largura total, deslocamos -33.333% para avançar 1 slide de forma simétrica
        const deslocamentoPorcentagem = -(indiceAtual * (100 / totalSlides));
        trilho.style.transform = `translateX(${deslocamentoPorcentagem}%)`;
    }

    if (btnAnterior && btnProximo && trilho && totalSlides > 0) {
        btnProximo.addEventListener('click', () => {
            moverCarrossel(indiceAtual + 1);
        });

        btnAnterior.addEventListener('click', () => {
            moverCarrossel(indiceAtual - 1);
        });
    }

    // =========================================================================
    // LÓGICA 5: FERRAMENTAS DE ACESSIBILIDADE WCAG (ZOOM E CONTRASTE)
    // =========================================================================
    const btnContraste = document.getElementById('btnContraste');
    const btnAumentarTexto = document.getElementById('btnAumentarTexto');
    const btnDiminuirTexto = document.getElementById('btnDiminuirTexto');
    let tamanhoFonteAtual = 100;

    if (btnContraste) {
        btnContraste.addEventListener('click', () => {
            document.body.classList.toggle('alto-contraste');
            btnContraste.textContent = document.body.classList.contains('alto
