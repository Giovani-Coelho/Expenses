export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statustusCode = 400) {
    this.message = message;
    this.statusCode = statustusCode;
  }
}
