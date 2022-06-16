import { User } from '../../entities/User';

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public create({ name, email }): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
    });

    this.users.push(user);
  }

  public listAll(): User[] {
    return this.users;
  }
}

export { UserRepository };
