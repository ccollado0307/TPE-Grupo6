import { UseGuards } from "@nestjs/common";
import { User } from "src/login/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('unidad')
    export class Unidad {
    
    @PrimaryGeneratedColumn()
    idUnidad: number;

    @Column()
    private nombre: string;

    @ManyToOne((type) => Unidad, unidad => unidad.usuarios)
    @JoinColumn({name: 'idUnidad'})
    public unidad: Unidad;

    public constructor(nombre?: string) {
        this.nombre = nombre;
    }

    public getIdUnidad():number{
        return this.idUnidad;
    }
    
    public getNombre():string{
        return this.nombre;
    }

    public setNomre(nombre: string){
        this.nombre = nombre;
    }
}