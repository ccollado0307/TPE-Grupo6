import { Body, Controller, Get, Post } from '@nestjs/common';
import {LoginService} from './login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService) { }

    @Post()
    create(@Body() data: any): boolean {
       return this.loginService.CheckearLogin(data);
    }
}
