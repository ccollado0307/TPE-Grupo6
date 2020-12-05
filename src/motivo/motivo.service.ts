import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { Repository } from 'typeorm';
import { Motivo } from './motivo.entity';

@Injectable()
export class MotivoService {
    constructor(
        @InjectRepository(Asistencia) private readonly asistenciaRepository: Repository<Asistencia>,
        @InjectRepository(Motivo) private readonly motivoRepository: Repository<Motivo>
    ) { }
}
