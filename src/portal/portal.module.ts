import { Module } from '@nestjs/common';
import { PortalController } from './portal.controller';
import { PortalService } from './portal.services';
@Module({
  controllers: [PortalController],
  providers: [PortalService],
})
export class PortalModule {}
