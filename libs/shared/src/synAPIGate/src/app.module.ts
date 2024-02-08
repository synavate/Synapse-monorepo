import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AppService } from "./app.service";
import { UserAccountModule } from './data-viz-sv/user-account/user-account.module';
import { UserAccountModule } from './user-account/user-account.module';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { DataVizSvModule } from './data-viz-sv/data-viz-sv.module';
import { VeridaConnectModule } from './verida-connect/verida-connect.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "UserInterface",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 8888
        }
      }
    ]),
    UserAccountModule,
    UserInterfaceModule,
    DataVizSvModule,
    VeridaConnectModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
