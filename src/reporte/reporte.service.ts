import { Injectable } from '@nestjs/common';
import { PersonalActivo } from './personalActivo';
import * as fs from 'fs';

@Injectable()
export class ReporteService {

    private listadoDePersonal: PersonalActivo[];

    public getListPersonal(): any {
        let listadoPers: PersonalActivo[] = this.loadListado();
        return listadoPers;
    }

    private loadListado(): PersonalActivo[] {
        let archivo = fs.readFileSync('personal.csv', 'utf8');
        let lineas = archivo.split('\n');
        const elementos = [];
        for (let i = 0; i < lineas.length; i++) {
            let linea = lineas[i].replace('\r', '');
            let p = linea.split(',');
            elementos.push(p);
        }
        this.listadoDePersonal = [];
        for (let i = 0; i < elementos.length; i++) {
            let oficialActivo = new PersonalActivo(parseInt(elementos[i][0]), (elementos[i][1]), elementos[i][2], elementos[i][3]);
            this.listadoDePersonal.push(oficialActivo);
        }
        return this.listadoDePersonal;
    }

    public registrarAsistencia(asist: any[]): string {

        for (let i: number = 0; i < asist.length; i++) {
            let oficial = asist[i];
            let dia = asist[i].dia;
            let asistencia = asist[i].asistencia;
            let causa = asist[i].causa;
            const personalAct = new PersonalActivo(parseInt(oficial.numero), oficial.grado, oficial.nombre, oficial.apellido);
            fs.appendFileSync('registroAsistencia.csv', `\n${dia},${personalAct.getNumero()},${personalAct.getGrado()},${personalAct.getApellido()},${personalAct.getNombre()},${asistencia},${causa}`);
        }

        return "Asistencia cargada correctamente";
    }

    public registrarPersona(persona: any): string {

            let oficial:PersonalActivo = new PersonalActivo(parseInt(persona.numero), persona.grado, persona.nombre, persona.apellido);
            fs.appendFileSync('personal.csv', `\n${oficial.getNumero()},${oficial.getGrado()},${oficial.getApellido()},${oficial.getNombre()}`);


            return "Asistencia cargada correctamente";

        }

}
//Actualizando repositorio
