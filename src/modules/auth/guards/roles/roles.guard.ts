import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  // constructor(private rol: string) {}
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const allowedRoles =
      this.reflector.get<string[]>('rol', context.getHandler()) ?? [];

    if (allowedRoles.length == 0) return true;

    const { roles } = context.getArgByIndex(0).user!;

    if (!roles) return true;

    const isAllowed = roles.some((rol: string) => allowedRoles.includes(rol));

    return isAllowed;
  }
}
