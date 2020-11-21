

export class PersonalActivo {

    private apellido: String;
    private nombre: String;
    private antiguedad: number;
    private grado: String;
    protected datosPers: String;

    public constructor(antiguedad: number, grado: String, nombre: String, apellido: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.antiguedad = antiguedad;
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
    public getAntiguedad(): number {
        return this.antiguedad;
    }

    public getGrado(): String {
        return this.grado;
    }

    public setAntiguedad(antiguedad: number) {
        this.antiguedad = antiguedad;
    }

}