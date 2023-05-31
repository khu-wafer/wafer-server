import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(body: CreateUserDto) {
    const { email, password } = body;
    const isUserExists = await this.userRepository.existsByEmail(email);

    if (isUserExists)
      throw new UnauthorizedException('해당하는 유저가 이미 존재합니다.');

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      email,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }

  async login(body: CreateUserDto) {
    const { email, password } = body;

    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('존재하지 않는 유저 입니다.');
    }

    const isPasswordVaildated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordVaildated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    return user.readOnlyData;
  }
}
