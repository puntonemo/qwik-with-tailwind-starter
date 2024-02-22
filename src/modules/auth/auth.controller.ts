import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signin(@Body() signInDto: SignInDto) {
    return this.authService.signin(signInDto);
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  profile() {
    return this.authService.profile();
  }
}
