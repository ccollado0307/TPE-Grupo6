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
        @InjectRepository(Asistencia) private readonly asistenciaRepository:Repository<Asistencia>,
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
}