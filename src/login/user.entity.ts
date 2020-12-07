import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {
    
    @PrimaryGeneratedColumn()
    private usuario: String;
    
    @Column()
    private contrasenia: String;

    @Column()
    private idUnidad: number;
    
    public constructor(usuario:string,password: String,idUnidad:number) {
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