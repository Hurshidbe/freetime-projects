import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwt: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies.authToken;
    if (!token) throw new HttpException('Token yoq', 500);
    try {
      const decoded = await this.jwt.verifyAsync(token);
      request.user = decoded; //// requestdan kelayotgan tokkeni user obektiga biriktirib qoyish
      return true;
    } catch (error) {
      throw new HttpException("token muddati eskirgan logindan o'ting", 500);
    }
  }
}
