import { IUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUserRepository {
  create({
    name, username, email, password,
  }: IUserDTO): Promise<void>

  listAll(): Promise<User[]>
  findByEmail(email:string): Promise<User>
}

export { IUserRepository };
