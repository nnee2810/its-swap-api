import { Controller, Get, Param, Query } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ParseEthereumAddressPipe } from "src/pipes/parse-ethereum-address.pipe"
import { AllowanceDto } from "../dto/allowance.dto"
import { ContractReadService } from "../services/contract-read.service"

@ApiTags("Contract Read")
// @UseInterceptors(CacheInterceptor)
@Controller("contract/read")
export class ContractReadController {
  constructor(private contractService: ContractReadService) {}

  @Get(":address/allowance")
  async getAllowance(
    @Param("address", ParseEthereumAddressPipe) address: `0x${string}`,
    @Query() query: AllowanceDto,
  ) {
    const value = await this.contractService.allowance(address, query)
    return String(value)
  }

  @Get(":address/balanceOf/:account")
  async getBalanceOf(
    @Param("address", ParseEthereumAddressPipe) address: `0x${string}`,
    @Param("account", ParseEthereumAddressPipe) account: `0x${string}`,
  ) {
    const value = await this.contractService.balanceOf(address, account)
    return String(value)
  }

  @Get(":address/decimals")
  async getDecimals(
    @Param("address", ParseEthereumAddressPipe) address: `0x${string}`,
  ) {
    const value = await this.contractService.decimals(address)
    return String(value)
  }

  @Get(":address/name")
  getName(@Param("address", ParseEthereumAddressPipe) address: `0x${string}`) {
    return this.contractService.name(address)
  }

  @Get(":address/symbol")
  getSymbol(
    @Param("address", ParseEthereumAddressPipe) address: `0x${string}`,
  ) {
    return this.contractService.symbol(address)
  }

  @Get(":address/totalSupply")
  async getTotalSupply(
    @Param("address", ParseEthereumAddressPipe) address: `0x${string}`,
  ) {
    const value = await this.contractService.totalSupply(address)
    return String(value)
  }
}
