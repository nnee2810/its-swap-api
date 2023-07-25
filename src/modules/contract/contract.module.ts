import { Module } from "@nestjs/common"
import { ContractReadController } from "./controllers/contract-read.controller"
import { ContractWriteController } from "./controllers/contract-write.controller"
import { ContractReadService } from "./services/contract-read.service"
import { ContractWriteService } from "./services/contract-write.service"

@Module({
  controllers: [ContractReadController, ContractWriteController],
  providers: [ContractReadService, ContractWriteService],
})
export class ContractModule {}
