import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common"
import { Response } from "express"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"

export interface AppResponse<T> {
  statusCode: number
  message?: string
  data?: T
}

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, AppResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<AppResponse<T>> {
    const { statusCode } = context.switchToHttp().getResponse<Response>()

    return next.handle().pipe(
      map((data) => ({
        statusCode,
        message: "Success",
        data,
      })),
    )
  }
}
