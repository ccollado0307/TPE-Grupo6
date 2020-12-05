import { Asistencia } from "src/asistencia/asistencia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('grado')
    export class Grado {
    
    @PrimaryGeneratedColumn()
    idGrado: number;

    @Column()
    private nombre: string;

    @OneToMany((type) => Asistencia, asistencia => asistencia.grado)
    public asistencias: Asistencia[]; 

    public constructor(nombre?: string) {
        this.nombre = nombre;
    }

    public getIdGrado():number{
        return this.idGrado;
    }
    
    public getNombre():string{
        return this.nombre;
    }

    public setNomre(nombre: string){
        this.nombre = nombre;
    }
}