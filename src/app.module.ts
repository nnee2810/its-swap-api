import { Module } from "@nestjs/common"
import { ContractModule } from "./modules/contract/contract.module"
import { SharedModule } from "./shared/shared.module"

@Module({
  imports: [SharedModule, ContractModule],
})
export class AppModule {}
