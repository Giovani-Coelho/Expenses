import { IUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUserRepository {
  create(data: IUserDTO): Promise<void>

  listAll(): Promise<User[]>

  findByEmail(email:string): Promise<User>
}

export { IUserRepository };
