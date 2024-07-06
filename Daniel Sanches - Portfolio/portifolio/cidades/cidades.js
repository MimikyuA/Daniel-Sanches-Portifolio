class Cidade {nome; estado; pais; habitantes; foto; fundacao;
    constructor(nome, estado, pais, habitantes, foto, fundacao) {
        this.nome = nome; this.estado = estado;
        this.pais = pais; this.habitantes = habitantes;
        this.foto = foto; this.fundacao = fundacao;
    }
}
const cidades = [];
cidades.push(new Cidade('Passa e Fica', 'Rio Grande Do Norte', 'Brasil', '13.474', 'passaefica.jpg', '10 de maio de 1962'));
cidades.push(new Cidade('Xique-Xique', 'Bahia', 'Brasil', '46.562', 'xiquexique.jpg', '1714'));
cidades.push(new Cidade('Truth or Consequences', 'Novo Mexico', 'Estados Unidos', '6.052','toc.jpg', '1920'));
cidades.push(new Cidade('Curitiba', 'Parana', 'Brasil', '1.773.718', 'curitiba.jpg', '1661'));
const cartoesCidades = document.querySelector('.cidades');
cidades.forEach(cidade =>{
    const cartao = document.createElement('div');
    cartao.classList.add('cartao');
    const nome = document.createElement('h2');
    nome.classList.add('nome')
    nome.textContent = cidade.nome;
    const estado = document.createElement('p');
    estado.classList.add('estado');
    estado.textContent = `Estado: ${cidade.estado}`;
    const pais = document.createElement('p');
    pais.classList.add('pais');
    pais.textContent = `Pais: ${cidade.pais}`;
    const habitantes = document.createElement('p');
    habitantes.classList.add('habitantes');
    habitantes.textContent = `Habitantes: ${cidade.habitantes}`;
    const foto = document.createElement('img');
    foto.classList.add('foto');
    foto.setAttribute('src', cidade.foto)
    const fundacao = document.createElement('p');
    fundacao.classList.add('fundacao');
    fundacao.textContent = `Fundação: ${cidade.fundacao}`;
    cartao.appendChild(foto);
    cartao.appendChild(nome);
    cartao.appendChild(estado);
    cartao.appendChild(pais);
    cartao.appendChild(habitantes);
    cartao.appendChild(fundacao);
    cartoesCidades.appendChild(cartao);
})