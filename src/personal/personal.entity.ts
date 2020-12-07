import { Asistencia } from "src/asistencia/asistencia.entity";
import { Grado } from "src/grado/grado.entity";
import { Unidad } from "src/unidad/unidad.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('personal')
export class Personal {

    @PrimaryGeneratedColumn()
    idPers: number;
    
    @Column()
    private antiguedad: number;

    @Column()
    private idGrado: number

    @Column()
    private apellido: String;

    @Column()
    private nombre: String;
    
    @Column()
    private idUnidad: number;

    @Column()
    private activo: boolean;

    @OneToMany((type) => Asistencia, asistencia => asistencia.personal)
    public asistencias: Asistencia[]; 

    @ManyToOne((type) => Grado, grado => grado.personal)
    @JoinColumn({name: 'idGrado'})
    public grado: Grado; 

    @ManyToOne((type) => Unidad, unidad => unidad.personal)
    @JoinColumn({name: 'idUnidad'})
    public unidad: Unidad; 
    
    public constructor(antiguedad?: number, idGrado?: number, apellido?: String, nombre?: String, idUnidad?: number, activo?: boolean) {
        this.antiguedad = antiguedad;
        this.idGrado = idGrado;
        this.apellido = apellido;
        this.nombre = nombre;
        this.idUnidad = idUnidad;
        this.activo = activo;     
    }

    public getAntiguedad(): number {
        return this.antiguedad;
    }

    public getIdGrado(): number {
        return this.idGrado;
    }

    public getApellido(): String {
        return this.apellido;
    }

    public getNombre(): String {
        return this.nombre;
    }

    public getIdUnidad(): number {
        return this.idUnidad;
    }

    public getActivo(): boolean {
        return this.activo;
    }

    public setAntiguedad(antiguedad: number) {
        this.antiguedad = antiguedad;
    }

    public setIdGrado(idGrado: number): void {
        this.idGrado = idGrado;
    }

    public setApellido(apellido: String): void {
        this.apellido = apellido;
    }
    
    public setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    public setIdUnidad(idUnidad: number): void {
        this.idUnidad = idUnidad;
    }

    public setActivo(activo: boolean): void {
        this.activo = activo;
    }
}