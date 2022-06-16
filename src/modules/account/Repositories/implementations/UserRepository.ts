import { getRepository, Repository } from 'typeorm';

import { IUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async create({
    name, username, email, password,
  }: IUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
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
