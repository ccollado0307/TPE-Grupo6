import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { User } from 'src/login/user';


@Injectable()
export class LoginService {

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
}