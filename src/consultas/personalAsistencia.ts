import { PersonalActivo } from "../reporte/PersonalActivo";

export class PersonalAsistencia extends PersonalActivo {

    private fecha: string;
    private asistencia: string;
    private motivo: string;
    
    public constructor(fecha: string, numero: number, grado: string, nombre: string, apellido: string, asistencia: string, motivo:string) {
        super(numero, grado, nombre, apellido);
        this.fecha = fecha;
        this.asistencia = asistencia;
        this.motivo = motivo;
    }

    public getFecha(): string {
        return this.fecha;
    }

    public getAsistencia(): string {
        return this.asistencia;
    }

    public getMotivo(): string {
        return this.motivo;
    }

    public setFecha(fecha: string) {
        this.fecha = fecha;
    }

    public setAsistencia(asistencia: string) {
        this.asistencia = asistencia;
    }

    public setMotivo(motivo: string) {
        this.motivo = motivo;
    }
}