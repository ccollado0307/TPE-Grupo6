import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { Grado } from 'src/grado/grado.entity';
import { Unidad } from 'src/unidad/unidad.entity';
import { Repository } from 'typeorm';
import { Personal } from './personal.entity';

@Injectable()
export class PersonalService {
    constructor(
        @InjectRepository(Personal) private readonly personalRepository: Repository<Personal>,
        @InjectRepository(Grado) private readonly gradoRepository: Repository<Grado>,
        @InjectRepository(Asistencia) private readonly asistenciaRepository: Repository<Asistencia>,
        @InjectRepository(Unidad) private readonly unidadRepository: Repository<Unidad>
    ) { }

    public async getAllPersonal(): Promise<Personal[]> {
        try {
            const personal: Personal[] = await this.personalRepository.find();
            return personal;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async registrarPersona(persona: any): Promise<string> {
        try {

            const cantPersonal: Personal[] = await this.personalRepository.find();

            let dimensionPersonal: number = cantPersonal.length + 1;

            //construyo una persona
            const personal: Personal = new Personal();
            personal.setApellido((persona.apellido).toUpperCase());
            personal.setNombre((persona.nombre).toUpperCase());

            let nroGrado = (persona.grado).substring(7,9);
            nroGrado = parseInt(nroGrado);
            personal.setIdGrado(nroGrado);

            //let antiguedad = parseInt(persona.antiguedad);
            personal.setAntiguedad(dimensionPersonal);

            personal.setIdUnidad(persona.idUnidad);
            personal.setActivo(persona.activo);

            await this.personalRepository.save(personal);

            return "ok";
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }

    }
    public async deletePersonal(idPers: number): Promise<boolean> {
        const pers: Personal = await this.personalRepository.findOne(idPers);
        if (!pers) {
            throw new HttpException('el personal no existe!', 404);
        } else {
            await this.asistenciaRepository.query("delete from asistencia where idPers =" + idPers);
            await this.personalRepository.delete(idPers);
            return true;
        }
    }
}