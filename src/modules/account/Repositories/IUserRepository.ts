import { User } from '../entities/User';

interface IRequest {
  name: string
  email: string
}

interface IUserRepository {
  create({ name, email }: IRequest): void
  listAll(): User[]
}

export { IUserRepository };
