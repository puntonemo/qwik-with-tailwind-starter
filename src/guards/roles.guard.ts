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
    console.log(context.getArgByIndex(0));
    const allowedRoles =
      this.reflector.get<string[]>('rol', context.getHandler()) ?? [];
    console.log(allowedRoles);

    // const { roles } = context.getArgByIndex(0).user!;
    // if (!roles) return true;
    // // const isAllowed = roles.includes(this.rol);
    // const allowedRoles =
    //   this.reflector.get<string[]>('rol', context.getHandler()) ?? [];
    // // const isAllowed = roles.includes(allowedRoles);
    // const isAllowed = roles.some((rol) => allowedRoles.includes(rol));
    // return isAllowed;
    return true;
  }
}
