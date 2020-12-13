import { Asistencia } from "src/asistencia/asistencia.entity";
import { Personal } from "src/personal/personal.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('grado')
    export class Grado {
    
    @PrimaryGeneratedColumn()
    idGrado: number;

    @Column()
    private nombre: string;

    @OneToMany((type) => Asistencia, asistencia => asistencia.grado)
    public asistencias: Asistencia[]; 

    @OneToMany((type) => Personal, personal => personal.grado)
    public personal: Personal[]; 

    public constructor(nombre?: string) {
        this.nombre = nombre;
    }

    public getIdGrado():number{
        return this.idGrado;
    }
    
    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    public setIdGrado(idGrado:number):void{
        this.idGrado=idGrado;
    }
}