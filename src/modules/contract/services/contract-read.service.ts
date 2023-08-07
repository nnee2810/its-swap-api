import { Injectable } from "@nestjs/common"
import * as erc20ABI from "src/abi/erc20ABI.json"
import { viemClient } from "src/helpers/viemClient"
import { AllowanceDto } from "../dto/allowance.dto"

@Injectable()
export class ContractReadService {
  allowance(address: `0x${string}`, query: AllowanceDto) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address as `0x${string}`,
      functionName: "allowance",
      args: Object.values(query),
    })
  }

  balanceOf(address: `0x${string}`, account: `0x${string}`) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address,
      functionName: "balanceOf",
      args: [account],
    })
  }

  decimals(address: `0x${string}`) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address,
      functionName: "decimals",
    })
  }

  name(address: `0x${string}`) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address,
      functionName: "name",
    })
  }

  symbol(address: `0x${string}`) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address,
      functionName: "symbol",
    })
  }

  totalSupply(address: `0x${string}`) {
    return viemClient.readContract({
      abi: erc20ABI,
      address: address,
      functionName: "totalSupply",
    })
  }
}
