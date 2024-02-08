"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("./app.service");
@(0, common_1.Module)({
    imports: [
        microservices_1.ClientsModule.register([
            {
                name: "UserInterface",
                transport: microservices_1.Transport.TCP,
                options: {
                    host: "127.0.0.1",
                    port: 8888
                }
            }
        ]),
        UserAccountModule
    ],
    controllers: [app_controller_1.AppController],
    providers: [app_service_1.AppService]
})
class AppModule {
}
exports.AppModule = AppModule;
