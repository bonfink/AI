const nomes = ["ednaudo pereia", "kid bengala", "leno brega", "ozama binladem"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);


