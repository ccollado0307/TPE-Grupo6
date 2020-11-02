import { Persona } from "./persona";


export class PersonalActivo extends Persona {

    private numero: number;
    private grado: String;
    protected datosPers: String;

    public constructor(numero: number, grado: String, nombre: String, apellido: String) {
        super(nombre, apellido);
        this.numero = numero;
        this.grado = grado;

    }

    public getnumero(): number {
        return this.numero;
    }

    public getGrado(): String {
        return this.grado;
    }

    public setNumero(numero: number) {
        this.numero = numero;
    }

    public getNumero(): number {
        return this.numero;
    }

    public datosPersonales(): String {
        this.datosPers = this.datosPers + " " + this.getNombre() + " " + this.getApellido() + " " + this.getGrado() + " " + this.getNumero.toString();
        return this.datosPers;

    }
}