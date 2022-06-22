import { getRepository, Repository } from 'typeorm';

import { IUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    // referencia ao banco de dados.
    this.repository = getRepository(User);
  }

  public async create({
    name, email, password, avatar, id,
  }: IUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  public async listAll(): Promise<User[]> {
    const user = await this.repository.find();
    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}

export { UserRepository };
