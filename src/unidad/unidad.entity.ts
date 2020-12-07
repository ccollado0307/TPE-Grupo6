import { UseGuards } from "@nestjs/common";
import { User } from "src/login/user.entity";
import { Personal } from "src/personal/personal.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('unidad')
    export class Unidad {
    
    @PrimaryGeneratedColumn()
    idUnidad: number;

    @Column()
    private nombre: string;

    @OneToMany((type) => User, usuario => usuario.unidad)
    public usuarios: User[]; 

    @OneToMany((type) => Personal, personal => personal.unidad)
    public personal: Personal[]; 

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