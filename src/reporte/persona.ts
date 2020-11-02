import { metodosPersona } from "./interfacePersona";

export abstract class Persona implements metodosPersona{
    
    private apellido:String;
    private nombre:String; 
     
     public constructor(nombre:String,apellido:String){
         this.nombre=nombre;
         this.apellido=apellido;
     }
 
     public getNombre():String{
         return this.nombre;
     }
 
     public getApellido():String{
         return this.apellido;
     }

     public setNombre(nombre:String):void{
        this.nombre=nombre;
     }

     public setApellido(apellido:String):void{
        this.apellido=apellido;
     }

     abstract datosPersonales(): String;
     
    
 }