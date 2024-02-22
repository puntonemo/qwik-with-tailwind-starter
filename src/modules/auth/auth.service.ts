import { Injectable } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly events: EventEmitter2,
  ) {}
  async signin(signInDto: SignInDto) {
    const payload = {
      email: signInDto.email,
    };

    const token = this.jwtService.sign(payload);

    this.events.emit('auth.signin', signInDto.email);

    return { result: 'ok', token };
  }

  async profile() {
    return {
      email: 'test@test.com',
    };
  }
}
