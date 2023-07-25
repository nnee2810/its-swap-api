import { ApiProperty } from "@nestjs/swagger"
import { IsEthereumAddress } from "class-validator"

export class AllowanceDto {
  @ApiProperty()
  @IsEthereumAddress()
  owner: string

  @ApiProperty()
  @IsEthereumAddress()
  spender: string
}
