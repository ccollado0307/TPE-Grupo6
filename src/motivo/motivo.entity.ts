import { Asistencia } from "src/asistencia/asistencia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('motivo')
    export class Motivo {
    
    @PrimaryGeneratedColumn()
    idMotivo: number;

    @Column()
    private motivo: string;

    @OneToMany((type) => Asistencia, asistencia => asistencia.motivo)
    public asistencias: Asistencia[]; 

    public constructor(motivo?: string) {
        this.motivo = motivo;
    }

    public getIdMotivo():number{
        return this.idMotivo;
    }
    
    public getMotivo():string{
        return this.motivo;
    }

    public setMotivo(motivo: string){
        this.motivo = motivo;
    }
}