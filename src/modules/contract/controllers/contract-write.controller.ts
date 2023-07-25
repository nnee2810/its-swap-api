import { Controller } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ContractWriteService } from "../services/contract-write.service"

@ApiTags("Contract Write")
@Controller("contract/write")
export class ContractWriteController {
  constructor(private contractService: ContractWriteService) {}
}
