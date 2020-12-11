import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { User } from 'src/login/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User) private readonly loginRepository: Repository<User>
    ) { }

    /*
    private listadoDeUsuarios: User[];
    public CheckearLogin(data: any): boolean {

        let archivo = fs.readFileSync('login.csv', 'utf8');
        let lineas = archivo.split('\n');

        const usuarios = [];
        for (let i = 0; i < lineas.length; i++) {
            let linea = lineas[i].replace('\r', '');
            let p = linea.split(',');
            usuarios.push(p);
        }
        this.listadoDeUsuarios = [];
        for (let i = 0; i < usuarios.length; i++) {
            let usuario = new User((usuarios[i][0]), (usuarios[i][1]));
            this.listadoDeUsuarios.push(usuario);
        }
        for (let i = 0; i < this.listadoDeUsuarios.length; i++) {
            if ((data.user == this.listadoDeUsuarios[i].getUsuario()) && (data.key == this.listadoDeUsuarios[i].getContrasenia())) {
                return true;
            }
        }
        return false;
    }
*/
    
 
    public async CheckearLogin(data: any): Promise<boolean> {

        const users: User[] = await this.loginRepository.find({
            where:[
                {"usuario": data.user,"contrasenia":data.key}
             ]
        });
        console.log(users);
        if (users.length > 0){
                return true;
        }
    
        return false;
    }

    public async getAllUsers(): Promise<User[]> {
        try {
            const users: User[] = await this.loginRepository.find();
            return users;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }  
    }

}