import { AuthUserDto } from "./auth-user.dto";

export class CreateUserDto extends AuthUserDto{
  name: string;
  age: number
  email: string;
}
