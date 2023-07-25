import { CacheInterceptor } from "@nestjs/cache-manager"
import { Controller, Get, Param, Query, UseInterceptors } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ParseEthereumAddressPipe } from "src/pipes/parse-ethereum-address.pipe"
import { AllowanceDto } from "../dto/allowance.dto"
import { ContractReadService } from "../services/contract-read.service"

@ApiTags("Contract Read")
@UseInterceptors(CacheInterceptor)
@Controller("contract/read")
export class ContractReadController {
  constructor(private contractService: ContractReadService) {}

  @Get(":address/allowance")
  async getAllowance(
    @Param("address", ParseEthereumAddressPipe) address: string,
    @Query() query: AllowanceDto,
  ) {
    const value = await this.contractService.allowance(address, query)
    return Number(value)
  }

  @Get(":address/balanceOf/:account")
  async getBalanceOf(
    @Param("address", ParseEthereumAddressPipe) address: string,
    @Param("account", ParseEthereumAddressPipe) account: string,
  ) {
    const value = await this.contractService.balanceOf(address, account)
    return Number(value)
  }

  @Get(":address/decimals")
  async getDecimals(
    @Param("address", ParseEthereumAddressPipe) address: string,
  ) {
    const value = await this.contractService.decimals(address)
    return Number(value)
  }

  @Get(":address/name")
  getName(@Param("address", ParseEthereumAddressPipe) address: string) {
    return this.contractService.name(address)
  }

  @Get(":address/symbol")
  getSymbol(@Param("address", ParseEthereumAddressPipe) address: string) {
    return this.contractService.symbol(address)
  }

  @Get(":address/totalSupply")
  async getTotalSupply(
    @Param("address", ParseEthereumAddressPipe) address: string,
  ) {
    const value = await this.contractService.totalSupply(address)
    return Number(value)
  }
}
