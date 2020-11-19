

export class PersonalActivo {

    private apellido: String;
    private nombre: String;
    private numero: number;
    private grado: String;
    protected datosPers: String;

    public constructor(numero: number, grado: String, nombre: String, apellido: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numero = numero;
        this.grado = grado;
    }

    public getNombre(): String {
        return this.nombre;
    }

    public getApellido(): String {
        return this.apellido;
    }

    public setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    public setApellido(apellido: String): void {
        this.apellido = apellido;
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