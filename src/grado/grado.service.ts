import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { Repository } from 'typeorm';
import { Grado } from './grado.entity';

@Injectable()
export class GradoService {
    constructor(
        @InjectRepository(Grado) private readonly gradoRepository: Repository<Grado>
    ) { }

    public async getAllGrados(): Promise<Grado[]> {
        try {
            const grados: Grado[] = await this.gradoRepository.find();
            return grados;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }  
    }

    public async getGradoById(id: number): Promise<Grado> {
        try {
            const grado: Grado = await this.gradoRepository.findOne(id);
            return grado;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }
}