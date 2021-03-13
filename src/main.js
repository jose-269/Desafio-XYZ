
class Cliente {
    
    constructor(nombre, impuesto = {}) {
        this.nombre = nombre;
        this.impuesto = {}
    };
    get getNombre() {
        return this.nombre
    };
    set setNombre(val) {
        this.nombre = val;
    };
    get getImpuesto() {
        return this.impuesto.impuesto;
    };
    // ((monto_bruto_anual − deducciones) * 21%)
    calcImpuesto(montoBruto, deducciones){
        const impuesto = (montoBruto - deducciones) * 0.21;
        if (!impuesto) return 0;
        this.impuesto = {
            impuesto,
        };
        
    };
};

class Impuestos {
    constructor(montoBruto, deducciones) {
        this.montoBruto = montoBruto;
        this.deducciones = deducciones;
    };
    get getMontoBruto() {
        return this.montoBruto;
    };
    set setMontoBruto(val) {
        return this.montoBruto = val ;
    };
    get getDeducciones() {
        return this.deducciones;
    };
    set setDeducciones(val) {
        return  this.deducciones = val
    };
};

const boton = document.getElementById("boton");
const nombre = document.getElementById("nombre");
const montoBruto = document.getElementById("montoBruto");
const deducciones = document.getElementById("deducciones");
const calculo = document.getElementById("calculo");


boton.addEventListener("click", () => {
    //Normalizaciones
    const nombreValor = nombre.value;
    const montoBrutoValor = Number(montoBruto.value);
    const deduccionesValor = Number(deducciones.value);

    if(!nombreValor || !montoBrutoValor || !deduccionesValor) {
        alert("Debe completar los campos");
        return
    }

    const Cliente1 = new Cliente(nombreValor);
    const Impuesto1 = new Impuestos(montoBrutoValor, deduccionesValor);

    Cliente1.calcImpuesto(Impuesto1.getMontoBruto,  Impuesto1.getDeducciones);

    calculo.innerHTML = `<h2>Los impuestos de don ${Cliente1.nombre} son de: ${Math.round(Cliente1.getImpuesto)} CLP</h2>`;
   
});

