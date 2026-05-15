document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA 1: Rolagem Suave do Botão Antigo ---
    const botaoSaibaMais = document.getElementById('btnSaibaMais');
    botaoSaibaMais.addEventListener('click', () => {
        document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
    });

    // --- LÓGICA 2: O Simulador Interativo ---
    const botaoVerificar = document.getElementById('btnVerificar');
    const seletorOpcao = document.getElementById('opcaoQuiz');
    const caixaResultado = document.getElementById('resultadoQuiz');

    botaoVerificar.addEventListener('click', () => {
        const resposta = seletorOpcao.value;

        // Torna a caixa de resultado visível
        caixaResultado.style.display = "block";

        if (resposta === "positivo") {
            caixaResultado.innerHTML = "🌱 Excelente! Sua propriedade está alinhada ao futuro sustentável, conservando o solo e reduzindo emissões de carbono.";
            caixaResultado.style.backgroundColor = "#d4edda"; // Cor verde de sucesso
            caixaResultado.style.color = "#155724";
        } 
        else if (resposta === "neutro") {
            caixaResultado.innerHTML = "⚡ Bom caminho! A tecnologia ajuda a mitigar impactos, mas há espaço para adotar mais práticas biológicas e regenerativas.";
            caixaResultado.style.backgroundColor = "#fff3cd"; // Cor amarela de aviso
            caixaResultado.style.color = "#856404";
        } 
        else if (resposta === "negativo") {
            caixaResultado.innerHTML = "⚠️ Alerta de Impacto! O manejo intensivo tradicional esgota os recursos do solo. Considere migrar para tecnologias do Agro Forte.";
            caixaResultado.style.backgroundColor = "#f8d7da"; // Cor vermelha de atenção
            caixaResultado.style.color = "#721c24";
        } 
        else {
            // Caso o usuário clique sem selecionar nenhuma opção
            caixaResultado.innerHTML = "Por favor, selecione uma das práticas agrícolas listadas acima.";
            caixaResultado.style.backgroundColor = "#eee";
            caixaResultado.style.color = "#333";
        }
    });
});


  
