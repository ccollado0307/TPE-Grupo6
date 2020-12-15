import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { check } from 'prettier';
import { Grado } from 'src/grado/grado.entity';
import { Motivo } from 'src/motivo/motivo.entity';
import { Personal } from 'src/personal/personal.entity';
import { Repository } from 'typeorm';
import { Asistencia } from './asistencia.entity';

@Injectable()
export class AsistenciaService {

    constructor(
        @InjectRepository(Asistencia) private readonly asistenciaRepository: Repository<Asistencia>,
        @InjectRepository(Motivo) private readonly motivoRepository: Repository<Motivo>,
        @InjectRepository(Grado) private readonly gradoRepository: Repository<Grado>
    ) { }

    public async getAll(): Promise<Asistencia[]> {
        try {
            const asistencias: Asistencia[] = await this.asistenciaRepository.find();
            return asistencias;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async addAsistencia(asist: any): Promise<string> {

        let dia: string = asist[1].dia;
        
        //para buscar en la base de datos, se necesita el tipo Date
        let date:Date = new Date(dia);
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
       
        let result: boolean = true;
       
        const checkeo: Asistencia[] = await this.asistenciaRepository.find({
            where: [
                { "fecha": date }
            ]
        });
        if (checkeo.length > 0) {
            result = true;
        } else {
            result = false;
        }

        if (!result) {

            try {
                for (let i = 0; i < asist.length; i++) {
                    //construyo un grado
                    const grado: Grado = new Grado(asist[i].grado);
                    grado.setIdGrado(asist[i].idGrado);

                    //construyo una persona
                    const persona: Personal = new Personal();
                    persona.setIdGrado(asist[i].idGrado);
                    persona.setIdPers(asist[i].idPers);

                    //construyo un motivo
                    const motivo: Motivo = new Motivo(asist[i].motivo);
                    motivo.setIdMotivo(asist[i].idMotivo);

                    //construyo la asistencia
                    const asistencia: Asistencia = new Asistencia();

                    let fecha = new Date(asist[i].dia);
                    fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset());

                    asistencia.setFecha(fecha);
                    asistencia.setPersonal(persona);
                    asistencia.setGrado(grado);
                    asistencia.setMotivo(motivo);
                    await this.asistenciaRepository.save(asistencia);
                }
                return "ok";
            } catch (error) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: "there is an error in the request, " + error,
                }, HttpStatus.NOT_FOUND);
            }
        }
  
    }

}