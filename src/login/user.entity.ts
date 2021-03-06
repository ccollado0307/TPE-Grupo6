import { Unidad } from "src/unidad/unidad.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    
    @PrimaryGeneratedColumn()
    private usuario: String;
    
    @Column()
    private contrasenia: String;

    @Column()
    private idUnidad: number;
    
    @ManyToOne((type) => Unidad, unidad => unidad.usuarios)
    @JoinColumn({name: 'idUnidad'})
    public unidad: Unidad;

    public constructor(usuario?:string, password?: String, idUnidad?:number) {
        this.usuario=usuario;
        this.idUnidad = idUnidad;
        this.contrasenia = password;
    }

    public getUsuario(): String {
        return this.usuario;
    }
 
    public getContrasenia(): String {
        return this.contrasenia;
    }
 
    public setUsuario(user: String):void {
        this.usuario = user;
    }
 
    public setContrasenia(pass:String):void{
        this.contrasenia=pass;
    }

    public getIdUnidad(): number {
        return this.idUnidad;
    }

    public setIdUnidad(idUnidad:number):void{
        this.idUnidad=idUnidad;
    }
}