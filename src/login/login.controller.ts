import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from './user.entity';

@Controller('login')
export class LoginController {

    public constructor(private readonly loginService: LoginService) { }

    @Get("getAll")
    public getAllUsers(): Promise<User[]> {
        return this.loginService.getAllUsers();
    }

    //Devuelve true si el usuario ingreso sus datos correctos o false 
    //si los datos ingresados no corresponden a usuario o contraseña valida
    @Post()
    create(@Body() data: any): Promise<boolean> {
        return this.loginService.CheckearLogin(data);
    }


    
}