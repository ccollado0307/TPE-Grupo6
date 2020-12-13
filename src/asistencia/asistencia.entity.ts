import { Grado } from "src/grado/grado.entity";
import { Motivo } from "src/motivo/motivo.entity";
import { Personal } from "src/personal/personal.entity";
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity('asistencia')
export class Asistencia {
    
    @PrimaryGeneratedColumn()
    idAsist: number;

    @Column()
    private fecha: Date;

    @ManyToOne((type) => Motivo, motivo => motivo.asistencias)
    @JoinColumn({name: 'idMotivo'})
    public motivo: Motivo;

    @ManyToOne((type) => Grado, grado => grado.asistencias)
    @JoinColumn({name: 'idGrado'})
    public grado: Grado; 

    @ManyToOne((type) => Personal, personal => personal.asistencias)
    @JoinColumn({name: 'idPers'})
    public personal: Personal;
 
    public constructor(fecha?: Date) {
        this.fecha = fecha;
    }

    public getIdAsist():number{
        return this.idAsist;
    }
    
    public getFecha():Date{
        return this.fecha;
    }

    public setFecha(fecha: Date){
        this.fecha = fecha;
    }

    public setIdAsist(id: number): void {
        this.idAsist = id;
    }

    public getMotivo(): Motivo {
        return this.motivo;
    }

    public setMotivo(motivo: Motivo):void {
        this.motivo = motivo;
    }

    public setPersonal(personal:Personal): void {
        this.personal=personal;
    }

    public getPersonal():Personal {
       return this.personal; 
    }

    public setGrado(grado:Grado):void{
        this.grado=grado;
    }

    public getGrado():Grado{
        return this.grado;
    }
}