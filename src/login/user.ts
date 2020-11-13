export class User {
    private usuario: String;
    private contrasenia: String;
    public constructor(user: String, password: String) {
        this.usuario = user;
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
}