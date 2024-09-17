// config do pix
const pix = {
    chave : "0336826a-f3f9-4ec9-81f5-25ec7706e589",
    descricao: "SEGURO",
    instituicao: "MERCADO LIVRE",
    cidade: "SAO PAULO"
}

// config do produto
const produto = {
    imagem: "https://http2.mlstatic.com/D_NQ_NP_671533-MLB78685012455_082024-F.webp",
    nome: "Arma Eletrica Metralhadora Automatica Bolinha Gel + 5mil bolinhas",
    preco: {
        original: "349,00",
        desconto: "39,90"
    },
    avaliacoes: [
        {
            data: "03 mar. 2023",
            texto: "A arminha é boa, gostei demais e ja to brincando com meus filhos. Recomendo muito. Pra quem tem dúvidas, procura no youtube um review."
        },
        {
            data: "04 abr. 2024",
            texto: "Eu amei, obrigado pelo brinde"
        },
        {
            data: "08 set. 2024",
            texto: "Meu filho adorou, ele queria ate mais duas chegou supoer rápido"
        },
        {
            data: "22 jan. 2024",
            texto: "A arminha de gel é boa e durou viu, gostei muito"
        }
    ]
}

// configuracoes globais da pagina
const global = {
    anuncio: {
        imagem: "https://i.ibb.co/1XQZGF9/advertising.png"
    }
}

// apenas calculos
let desconto = parseInt(((parseFloat(produto.preco.original.replace(",", ".")) - parseFloat(produto.preco.desconto.replace(",", "."))) / parseFloat(produto.preco.original.replace(",", "."))) * 100);
let parcela = (Math.round(parseFloat(produto.preco.desconto.replace(",", ".")) / 12 * 100) / 100).toFixed(2).replace(".", ",");
