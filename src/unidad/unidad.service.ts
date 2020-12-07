import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unidad } from './unidad.entity';

@Injectable()
export class UnidadService {
    constructor(
        @InjectRepository(Unidad) private readonly unidadRepository: Repository<Unidad>
        ) { }

    async getAllUnidades(): Promise<Unidad[]> {
        try {
            const unidades: Unidad[] = await this.unidadRepository.find();
            return unidades;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }  
    }
}
