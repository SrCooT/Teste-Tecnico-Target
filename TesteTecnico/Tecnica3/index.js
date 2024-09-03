// Seleciona o elemento HTML onde os resultados serão exibidos
const divDias = document.querySelector("#dias");


fetch("dados.json")
    .then((response) => response.json())
    .then((dados) => {
    
        const faturamentoPositivo = dados.date.filter((dia) => dia.valor > 0);

        const menorFaturamento = Math.min(...faturamentoPositivo.map((dia) => dia.valor));

        const maiorFaturamento = Math.max(...faturamentoPositivo.map((dia) => dia.valor));
    
        const mediaMensal =
        faturamentoPositivo.reduce((acc, dia) => acc + dia.valor, 0) /
        faturamentoPositivo.length;

        const diasAcimaMedia = faturamentoPositivo.filter((dia) => dia.valor > mediaMensal).length;

        console.log(`Menor valor de faturamento em um dia do mês: ${menorFaturamento.toFixed(2)}`);
        console.log(`Maior valor de faturamento em um dia do mês: ${maiorFaturamento.toFixed(2)}`);
        console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaMedia}`);

        
        divDias.innerHTML += `<li>Menor valor de faturamento: ${menorFaturamento.toFixed(2)}</li>`;
        divDias.innerHTML += `<li>Maior valor de faturamento: ${maiorFaturamento.toFixed(2)}</li>`;
        divDias.innerHTML += `<li>Dias com faturamento acima da média: ${diasAcimaMedia}</li>`;
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON:", error));
