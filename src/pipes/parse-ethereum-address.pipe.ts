import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from "@nestjs/common"
import { isAddress } from "viem"

export class ParseEthereumAddressPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (isAddress(value)) return value
    throw new BadRequestException(
      `${metadata.data} is not a valid ethereum address`,
    )
  }
}
