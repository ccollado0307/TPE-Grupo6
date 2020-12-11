import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/login/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User) private readonly loginRepository: Repository<User>
    ) { }
 
    public async CheckearLogin(data: any): Promise<boolean> {
        const users: User[] = await this.loginRepository.find({
            where:[
                {"usuario": data.user,"contrasenia":data.key}
             ]
        });
        if (users.length > 0){
                return true;
        }
        return false;
    }

    public async getAllUsers(): Promise<User[]> {
        try {
            const users: User[] = await this.loginRepository.find();
            return users;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }  
    }
}