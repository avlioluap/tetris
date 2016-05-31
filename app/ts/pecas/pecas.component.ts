
export class Pecas {
    
    constructor() {}
    
    public static addRandom(listaPecas: any) {
        let randomBloco;
        
        randomBloco = listaPecas[Math.floor(Math.random() * listaPecas.length)]
        
        return randomBloco;
    }
}