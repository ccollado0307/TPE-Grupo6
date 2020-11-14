import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { PersonalActivo } from 'src/reporte/personalActivo';
import { PersonalAsistencia } from './personalAsistencia';

@Injectable()
export class ConsultasService {

    private listadoDePersonal: PersonalActivo[];

    //Carga los datos de Personal de la BD el select "option_listPers"
    public getCargarPersonal(): any {
        let listadoPers: PersonalActivo[] = this.loadListado();
        return listadoPers;
    }

    //Carga listado de personal activo de la base de datos
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
            let personal = new PersonalActivo(parseInt(elementos[i][0]), (elementos[i][1]), elementos[i][2], elementos[i][3]);
            this.listadoDePersonal.push(personal);
        }
        return this.listadoDePersonal;
    }

    //Personal que asistio 
    private listadoConsulta: PersonalAsistencia[];
    //Resultado de la consulta
    private listadoAsistencia: PersonalAsistencia[];

    private loadInformation(): PersonalAsistencia[] {
        this.listadoAsistencia = [];
        let archivo = fs.readFileSync('registroAsistencia.csv', 'utf8');
        let lineas = archivo.split('\n');
        let elementos = [];
        for (let i = 0; i < lineas.length; i++) {
            let linea = lineas[i].replace('\r', '');
            let p = linea.split(',');
            elementos.push(p);
        }
        for (let i = 0; i < elementos.length; i++) {
            let persAsist: PersonalAsistencia = new PersonalAsistencia(elementos[i][0], parseInt(elementos[i][1]), elementos[i][2], elementos[i][3], elementos[i][4], elementos[i][5], elementos[i][6]);
            this.listadoAsistencia.push(persAsist);
        }
        return this.listadoAsistencia;
    }

    //Recibe el numero de consulta, personal y fecha y selecciona la informacion a devolver 
    public getInformationQuery(parametros: any): any {
        this.listadoConsulta = [];
        this.listadoAsistencia = this.loadInformation();
        switch (parametros.nroConsulta) {
            case 1: this.listadoConsulta = this.loadAllInformationQuery1(parametros.persAsist);
                break;
            case 2: this.listadoConsulta = this.loadAllInformationQuery2(parametros.fecha);
                break;
            case 3: this.listadoConsulta = this.loadAllInformationQueryMotivo(parametros.fecha, 'Guardia Entrante');
                break;
            case 4: this.listadoConsulta = this.loadAllInformationQueryMotivo(parametros.fecha, 'Guardia Saliente');
                break;
            default:
                this.listadoConsulta = this.loadAllInformationQueryMotivo(parametros.fecha, 'Autorizado');
        }
        return this.listadoConsulta;
    }


    //Resultado de la consulta numero 1
    private loadAllInformationQuery1(persAct: string): PersonalAsistencia[] {
        for (let i = 0; i < this.listadoAsistencia.length; i++) {
            let cadenaPers = this.listadoAsistencia[i].getGrado() + ' ' + this.listadoAsistencia[i].getApellido() + ' ' + this.listadoAsistencia[i].getNombre();
            if (cadenaPers.indexOf(persAct) == 0) {
                this.listadoConsulta.push(this.listadoAsistencia[i]);
            }
        }
        return this.listadoConsulta;
    }

    //Resultado de la consulta numero 2
    private loadAllInformationQuery2(fecha: string): PersonalAsistencia[] {
        for (let i = 0; i < this.listadoAsistencia.length; i++) {
            if (this.listadoAsistencia[i].getFecha() == fecha) {
                this.listadoConsulta.push(this.listadoAsistencia[i]);
            }
        }
        return this.listadoConsulta;
    }
    
    //Resultado de la consulta numero 3, 4 y 5
    private loadAllInformationQueryMotivo(fecha: string, motivo: string): PersonalAsistencia[] {
        for (let i = 0; i < this.listadoAsistencia.length; i++) {
            if ((this.listadoAsistencia[i].getFecha() == fecha) && (this.listadoAsistencia[i].getMotivo() == motivo)) {
                this.listadoConsulta.push(this.listadoAsistencia[i]);
            }
        }
        return this.listadoConsulta;
    }
} 