export class Operacion {
    constructor(
        public Id: number,
        public Tipo : string,
        public Fecha : Date,
        public Cliente: string,
        public Importe : number,
        public Obs : string
    ) {
        
    }
}

