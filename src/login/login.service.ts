import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class LoginService {

    public CheckearLogin(data: any): boolean {

        let archivo = fs.readFileSync('login.csv', 'utf8');
        let lineas = archivo.split('\n');

        for (let i = 0; i < lineas.length; i++) {
            let linea = lineas[i].replace('\r', '');
            let p = linea.split(',');
            console.log(data.user);
            console.log(data.key);
            console.log(p[0]);
            console.log(p[1]);
            if (( data.user == p[0]) && ( data.key == p[1])){
                console.log("entrexFIN");
               return true;
            }
       }
       return false;
    }
}
