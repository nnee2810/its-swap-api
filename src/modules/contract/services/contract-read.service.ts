import { Injectable } from "@nestjs/common"
import * as erc20ABI from "src/abi/erc20ABI.json"
import { viemClient } from "src/helpers/viemClient"
import { AllowanceDto } from "../dto/allowance.dto"

@Injectable()
export class ContractReadService {
  allowance(address: string, query: AllowanceDto) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address as `0x${string}`,
      functionName: "allowance",
      args: Object.values(query),
    })
  }

  balanceOf(address: string, account: string) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address as `0x${string}`,
      functionName: "balanceOf",
      args: [account],
    })
  }

  decimals(address: string) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address as `0x${string}`,
      functionName: "decimals",
    })
  }

  name(address: string) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address as `0x${string}`,
      functionName: "name",
    })
  }

  symbol(address: string) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address as `0x${string}`,
      functionName: "symbol",
    })
  }

  totalSupply(address: string) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address as `0x${string}`,
      functionName: "totalSupply",
    })
  }
}
