import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grado } from 'src/grado/grado.entity';
import { Motivo } from 'src/motivo/motivo.entity';
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
}
