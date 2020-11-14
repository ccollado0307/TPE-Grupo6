import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService) { }

    //Devuelve true si el usuario ingreso sus datos correctos o false 
    //si los datos ingresados no corresponden a usuario o contraseña valida
    @Post()
    create(@Body() data: any): boolean {
        return this.loginService.CheckearLogin(data);
    }
}