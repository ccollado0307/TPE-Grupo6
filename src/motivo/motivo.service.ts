import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

/*     Retorno el OBJETO MOTIVO
        public async getMotivoById(id: number): Promise<Motivo> {
        try {
            const motivo: Motivo = await this.motivoRepository.findOne(id);
            return motivo;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    } */
    //Retorna el Motivo dado un idMotivo
    public async getMotivoById(id: number): Promise<string> {
        try {
            const motivo: Motivo = await this.motivoRepository.findOne(id);
            return motivo.getMotivo();
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }
}