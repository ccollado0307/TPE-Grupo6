import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personal } from './personal.entity';

@Injectable()
export class PersonalService {
    constructor(
        @InjectRepository(Personal) private readonly personalRepository: Repository<Personal>
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