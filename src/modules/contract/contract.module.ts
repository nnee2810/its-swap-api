import { Module } from "@nestjs/common"
import { ContractReadController } from "./controllers/contract-read.controller"
import { ContractReadService } from "./services/contract-read.service"

@Module({
  controllers: [ContractReadController],
  providers: [ContractReadService],
})
export class ContractModule {}
