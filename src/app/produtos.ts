export interface IProduto {
    id: number;
    descricao: string;
    util: string;
    preco: number;
    parcela: string;
    imagem: string;
    
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;

}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse gamer", util: "games" ,preco: 439.00, parcela: "ou 10x de R$43,90" ,imagem: "./assets/mouse-3.jpg"},
    { id: 2, descricao: "Monitor muito bom", util: "office", preco: 1200.50, parcela: "ou 10x de R$120,05", imagem: "./assets/monitor-1.jpg"},
    { id: 3, descricao: "Teclado excelente", util: "office", preco: 749.99, parcela: "ou 10x de R$74,99", imagem: "./assets/teclado-1.jpg"},
    { id: 4, descricao: "Fone para quem joga FPS", util: "games / music", preco: 599.99, parcela: "ou 10x de R$59,99", imagem: "/.assets/fone-de-ouvido-2.jpg"},
    { id: 5, descricao: "Fone de ouvido", util: "office / sports", preco: 299.99, parcela: "ou 10x de R$290,99", imagem: "./assets/fone-de-ouvido-1.jpg"},
    { id: 6, descricao: "Fone de ouvido bom", util: "games / music", preco: 50,  parcela: "ou 10x de R$5,00",imagem: "./assets/fone-de-ouvido-3.jpg"},
    { id: 7, descricao: "Combo de placa de vídeos", util: "hardware", preco: 5000, parcela: "ou 10x de R$500,00",imagem: "./assets/placa-video.jpg"},
    { id: 8, descricao: "Processador", util: "hardware", preco: 1000, parcela: "ou 10x de R$100,00", imagem: "./assets/processador.jpg" },
    { id: 9, descricao: "Notebook bom", util: "office / study",preco: 2500, parcela: "ou 10x de R$250,00", imagem: "./assets/laptop-1.jpg" },
    { id: 10, descricao: "Notebook excelente", util: "office / study", preco: 4500, parcela: "ou 10x de R$450,00", imagem: "./assets/laptop-2.jpg"},
    { id: 11, descricao: "Mouse ótimo", util: "games", preco: 200, parcela: "ou 10x de R$20,00", imagem: "./assets/mouse-2.jpg" },
    { id: 12, descricao: "Mouse pequeno",  util: "office / study", preco: 50, parcela: "ou 10x de R$5,00", imagem: "./assets/mouse-4.jpg"},
    { id: 13, descricao: "Teclado bom",  util: "games", preco: 159.99, parcela: "ou 10x de R$15,99", imagem: "./assets/teclado-2.jpg" },
    { id: 14, descricao: "Notebook Gamer",  util: "games", preco: 5999,  parcela: "ou 10x de R$599,99", imagem: "./assets/notebook.jpg"},
    { id: 15, descricao: "Monitor", preco: 2000,  util: "games",  parcela: "ou 10x de R$200,00", imagem: "./assets/monitor.jpg"},
    { id: 16, descricao: "X-box Series", preco: 2000, parcela: "ou 10x de R$200,00",  util: "games", imagem: "./assets/xbox.jpg"}
];